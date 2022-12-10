//const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");

type Base = {
  name: string;
  parent: Folder | null;
};

type File = Base & {
  size: number;
  type: "file";
};

type Folder = Base & {
  children: (File | Folder)[];
  type: "folder";
};

const root: Folder = {
  name: "/",
  children: [],
  type: "folder",
  parent: null,
};

let currentPath: Folder[] = [];

const getFolder = (
  parentFolder: Folder | undefined,
  folderName: string
): Folder => {
  if (!parentFolder) return root;

  const folder = parentFolder.children.find(
    (folder) => folder.name === folderName && folder.type === "folder"
  );

  if (folder === undefined) return root;

  return folder as Folder;
};

for (const line of lines) {
  if (line === "$ cd /") {
    currentPath = [root];
  } else if (line === "$ cd ..") {
    currentPath.pop();
  } else if (line.startsWith("$ cd")) {
    const folderName = line.split(" ")[2];
    currentPath.push(getFolder(currentPath.at(-1), folderName));
  } else if (line.startsWith("dir")) {
    const createdFolder: Folder = {
      name: line.split(" ")[1],
      children: [],
      parent: currentPath.at(-1) ?? root,
      type: "folder",
    };
    currentPath.at(-1)?.children.push(createdFolder);
  } else if (!line.startsWith("$")) {
    currentPath.at(-1)?.children.push({
      name: line.split(" ")[1],
      size: Number(line.split(" ")[0]),
      parent: currentPath.at(-1) ?? root,
      type: "file",
    });
  }
}

const getFolderSize = (folder: Folder) => {
  let folderSize = 0;
  for (let i = 0; i < folder.children.length; i++) {
    const child = folder.children[i];
    if (child.type === "file") {
      folderSize += Number(child.size);
    } else {
      folderSize += getFolderSize(child);
    }
  }
  return folderSize;
};

let totalSizeUnder100k = 0;

const getSmallFoldersTotal = (folder: Folder) => {
  const folderSize = getFolderSize(folder);
  if (folderSize <= 100000) {
    totalSizeUnder100k += folderSize;
  }
  for (let i = 0; i < folder.children.length; i++) {
    const element = folder.children[i];
    if (element.type === "folder") {
      getSmallFoldersTotal(element);
    }
  }
};

getSmallFoldersTotal(root);

console.log(totalSizeUnder100k);
