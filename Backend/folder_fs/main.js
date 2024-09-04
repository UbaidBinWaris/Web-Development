import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basepath =
  "C:\\Users\\ADMIN\\OneDrive\\Documents\\Web development\\Web-Development\\Backend\\folder_fs";

let files = await fs.readdir(basepath);

for (const items of files) {
  let ext = items.split(".")[items.split(".").length - 1];
  if (ext != "js" && ext != "json" && ext.split(".").length > 1) {
    if (fsn.existsSync(ext)) {
      fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
    } else {
      fs.mkdir(ext);
    }
  }
}
