import { selectTarget, renderTargets } from "./partials/targets.js";
import { buildTypePost } from "./partials/postType.js";
import { moreInfo } from "./partials/moreInfo.js";
import { generate } from "./generate.js";

renderTargets();

window.selectTarget = selectTarget;
window.buildTypePost = buildTypePost;
window.moreInfo = moreInfo;
window.generate = generate;
