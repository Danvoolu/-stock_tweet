import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const data = [
  { icon: <HomeIcon />, label: "Home", link: "/" },
  { icon: <ContentCutIcon />, label: "tweets", link: "/tweets" },
];

const LeftDrawer = () => {
  return (
    <div>
      <Toolbar variant="dense" />
      <Divider />
      <List>
        {data.map((item, index) => (
          <Link href={item.link} key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{ py: 0.5 }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
export default LeftDrawer;
