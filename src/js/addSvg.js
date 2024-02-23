import { sanitize } from "dompurify";

export default addSvg = (container, svgCode) => {
    container.innerHtml = sanitize(svgCode);
}
