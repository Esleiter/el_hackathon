import { background } from "./background.js";
import { reqApiKey } from "./partials/reqApiKey.js";
import { selectTarget } from "./partials/targets.js";
import { buildTypePost } from "./partials/postType.js";
import { moreInfo } from "./partials/moreInfo.js";
import { generate } from "./generate.js";

reqApiKey();

window.background = background;
window.selectTarget = selectTarget;
window.buildTypePost = buildTypePost;
window.moreInfo = moreInfo;
window.generate = generate;
