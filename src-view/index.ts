import GlobalComponent from "./common/globalComponent";
import Head from "./views/components/head";
import { routerInit } from "@/router";
import "@/views/scss/color.scss";
import "@/views/scss/index.scss";

GlobalComponent.render("Head", new Head());
routerInit("/");
