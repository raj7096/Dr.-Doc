import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import PagesIcon from "@material-ui/icons/Pages";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const logo = {
  fontSize: "30px",
  marginBottom: "15px",
};

const data = [
  {
    id: 1,
    Icon: <CompareArrowsIcon style={logo} />,
    Title: "compress Pdf",
    Details: "Reduce the size of your PDF without losing quality",
    Backgroundcolor: "rgba(242, 48, 48, 1)",
    url: "http://localhost:3050/compression",
    requiredFile: 1,
    fileType: ["application/pdf"],
  },
  {
    Icon: <MergeTypeIcon style={logo} />,
    Title: "Merge PDF",
    Details: "Combine multiple PDFs into one unified document",
    Backgroundcolor: "rgba(255, 76, 35, 1)",
    url: "http://localhost:3050/merge",
    requiredFile: 2,
    fileType: ["application/pdf"],
  },
  {
    Icon: <PictureAsPdfIcon style={logo} />,
    Title: "PDF Converter",
    Details: "Convert Word, PowerPoint and Excel files to PDF",
    Backgroundcolor: "rgba(255, 121, 25, 1)",
    url: "http://localhost:3050/convert",
    requiredFile: 1,
    fileType: [],
  },
  {
    Icon: <TextFieldsIcon style={logo} />,
    Title: "Extract Text",
    Details: "Extract text From Photo Using Google Vision Api",
    Backgroundcolor: "rgba(255, 159, 25, 1)",
    url: "http://localhost:3050/upload",
    requiredFile: 1,
    fileType: ["image/jpeg", "image/png", "image/jpg"],
  },
  {
    Icon: <PagesIcon style={logo} />,
    Title: "Number Pages",
    Details: "Insert page numbers in PDF with ease &nbsp;",
    Backgroundcolor: "rgba(61, 153, 245, 1)",
    url: "http://localhost:3050/pageNumber",
    requiredFile: 1,
    fileType: ["application/pdf"],
  },
  {
    Icon: <EnhancedEncryptionIcon style={logo} />,
    Title: "Encrypt PDF",
    Details: "Add a password and encrypt your PDF file",
    Backgroundcolor: "rgba(121, 97, 242, 1)",
    url: "http://localhost:3050/encrypt",
    requiredFile: 1,
    temp: true,
    fileType: ["application/pdf"],
  },
  {
    Icon: <NoEncryptionIcon style={logo} />,
    Title: "Decrypt PDF",
    Details: "Remove a password and Decrypt your PDF file",
    Backgroundcolor: "rgba(153, 102, 255, 1)",
    url: "http://localhost:3050/decrypt",
    requiredFile: 1,
    temp: true,
    fileType: ["application/pdf"],
  },
  {
    Icon: <LockOpenIcon style={logo} />,
    Title: "Unlock Pdf",
    Details: "Remove password, encryption, and permission from your PDF",
    Backgroundcolor: "rgba(230, 103, 230, 1)",
    url: "http://localhost:3050/unlock",
    requiredFile: 1,
    fileType: ["application/pdf"],
  },
];

export default data;
