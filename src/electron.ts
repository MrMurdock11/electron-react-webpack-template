import { app, BrowserWindow } from "electron";

let window: BrowserWindow | null;

function createWindow() {
	window = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
		},
	});

	if (process.env.NODE_ENV === "development") {
		window.loadURL("http://localhost:4000/");
	} else {
		window.loadFile("./renderer/index.html");
	}

	window.on("closed", () => {
		window = null;
	});
}

app.on("ready", createWindow);
app.allowRendererProcessReuse = true;
