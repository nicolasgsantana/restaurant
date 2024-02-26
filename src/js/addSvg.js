import { sanitize } from "dompurify";

export default function (svgCode) {
    return sanitize(svgCode);
}
