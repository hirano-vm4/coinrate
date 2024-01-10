#!/usr/bin/env node

import { CoinRateApp } from "./src/coinrate_app.js";

const coinrateApp = new CoinRateApp();
coinrateApp.exec();
