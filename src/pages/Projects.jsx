import { useEffect } from "react";

import { Col, Row, Space, Tooltip } from "antd";
import { GithubOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import portfolioImg from "../assets/images/project_portfolio.png";
import shalImg from "../assets/images/project_shal.png";

import { Card, Tag } from "../components";

function Projects() {
    useEffect(() => {
        document.documentElement.scrollTop =
            document.documentElement.clientHeight;
        document.documentElement.scrollLeft =
            document.documentElement.clientWidth;
    }, []);

    return (
        <div id="section-projects" className="section-space">
            <Fade bottom distance="10%">
                <h2 className="mb-3 font-xlarge text-uppercase">
                    📂 My <span className="color-primary">Projects</span>
                </h2>
            </Fade>
            <Fade bottom distance="10%">
                <Row
                    gutter={[
                        {
                            xs: 16,
                            sm: 16,
                            md: 16,
                            lg: 24,
                        },
                        {
                            xs: 16,
                            sm: 16,
                            md: 16,
                            lg: 24,
                        },
                    ]}
                    wrap
                >
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Card
                            cover={
                                <img
                                    alt="Patteera's Portfolio Project Image"
                                    src={portfolioImg}
                                />
                            }
                            actions={[
                                <a
                                    href="https://github.com/mineteeraa/portfolio"
                                    target="_blank"
                                >
                                    <GithubOutlined key="github" />
                                </a>,
                            ]}
                            className="card-project"
                        >
                            <div className="mb-2">
                                <Space size={[0, 8]} wrap>
                                    <Tag>React.js</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>Ant Design</Tag>
                                    <Tag>JavaScript</Tag>
                                </Space>
                            </div>
                            <div>
                                <div className="font-title font-bold">
                                    Portfolio
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Card
                            cover={<img alt="SHAL Demo Video" src={shalImg} />}
                            actions={[
                                <Tooltip title="Demo video">
                                    <a
                                        href="https://drive.google.com/file/d/1XQWF7L22tXDVv_ACiTMoAB0AoTAW55_0/view?usp=sharing"
                                        target="_blank"
                                    >
                                        <PlayCircleOutlined key="demo-link" />
                                    </a>
                                </Tooltip>,
                            ]}
                            className="card-project"
                        >
                            <div className="mb-2">
                                <Space size={[0, 8]} wrap>
                                    <Tag>Vue.js</Tag>
                                    <Tag>Tailwind CSS</Tag>
                                    <Tag>Figma</Tag>
                                </Space>
                            </div>
                            <div>
                                <div className="font-title font-bold">
                                    SHAL: SHopping and Auction via Line
                                </div>
                                <div className="mt-1 font-small">
                                    Graduation Project
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Fade>
        </div>
    );
}

export default Projects;
