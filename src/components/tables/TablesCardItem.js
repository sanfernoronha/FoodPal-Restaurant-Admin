import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import QRCode from "qrcode.react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import CropFreeIcon from "@material-ui/icons/CropFree";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DownloadIcon from "@material-ui/icons/ArrowDownward";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 580,
  },
  cover: {
    width: 180,
    height: 150,
  },
  content: {
    flex: "1 0 auto",
  },
  actions: {
    marginTop: "auto",
  },
}));

export default function TablesCardItem() {
  const classes = useStyles();

  const [data, setData] = useState({
    id: "5fef0e0ff4b5ef08a357d814",
    tableNumber: 1,
  });

  const [showQr, setShowQr] = useState(false);

  const handleSetShowQr = () => {
    setShowQr(!showQr);
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${data.tableNumber}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    handleSetShowQr();
  };
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="https://www.btklsby.go.id/images/placeholder/food.png"
        />
        <CardContent className={classes.content}>
          <Box display="flex" alignItems="center" flexDirection="row">
            <Box ml={1}>
              <Typography component="h5" variant="h4">
                #1
              </Typography>
            </Box>
            <Box ml={1}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <PersonIcon color="inherit" fontSize="large" />
                <Typography variant="h5" color="initial" component="h2">
                  2
                </Typography>
              </div>
            </Box>
          </Box>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            startIcon={<DeleteIcon />}
            style={{ marginRight: 20 }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="inherit"
            startIcon={<CropFreeIcon />}
            onClick={() => handleSetShowQr()}
          >
            QR
          </Button>
        </CardActions>
      </Card>
      {showQr && (
        <div>
          <QRCode
            id={"qrcode"}
            value={JSON.stringify(data)}
            size={256}
            level={"H"}
            includeMargin={true}
          />
          <button>
            <Button
              size="small"
              color="primary"
              startIcon={<DownloadIcon />}
              onClick={() => downloadQR()}
            >
              Download QR
            </Button>
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
