import { useEffect } from "react";

import { ConfigProvider } from "antd";

import { Anchor } from "./components";
import { ANCHOR_ITEMS } from "./utils/anchor-items";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import "./App.css";
import { scrollRestoration } from "./utils/script";

function App() {
    useEffect(() => {
        document.title = "Patteera's Portfolio";
        scrollRestoration();
    }, []);
    return (
        <ConfigProvider
            theme={{
                components: {
                    Anchor: { colorSplit: "transparent" },
                },
            }}
        >
            <Home />
            <Anchor items={ANCHOR_ITEMS}>
                <AboutMe />
                <Projects />
                <Experiences />
                <Skills />
                <Contact />
            </Anchor>
        </ConfigProvider>
    );
}

export default App;
