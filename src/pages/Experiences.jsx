import { Col, Row, Space } from "antd";
import {
    EnvironmentOutlined,
    FileOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import { Card, Tag } from "../components";

function Experiences() {
    return (
        <div id="section-experiences" className="section-space">
            <Fade bottom distance="10%">
                <h2 className="mb-3 font-xlarge text-uppercase">
                    💼 My <span className="color-primary">Experiences</span>
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
                >
                    <Col span={24}>
                        <Card
                            title={
                                <>
                                    <div className="font-large">
                                        CSS Developer (Internship)
                                    </div>
                                    <div className="mt-1">
                                        <EnvironmentOutlined className="font-title" />
                                        <span className="ml-1 font-small">
                                            Ascend Commerce CTA
                                        </span>
                                    </div>
                                </>
                            }
                            extra={
                                <div className="font-small">
                                    August 2022 - March 2023
                                </div>
                            }
                        >
                            <div className="mb-3">
                                <p className="indent-4">
                                    For this internship, I have trained about
                                    UX/UI process and frontend code structure,
                                    and doing as a CSS Developer after training
                                    done.
                                </p>
                            </div>
                            <div className="mb-3">
                                <div className="mb-2 font-bold">
                                    Responsibilities
                                </div>
                                <ul>
                                    <li>
                                        Participated in a team to develop and
                                        implement frontend code based on user
                                        interface designs provided by the
                                        product designer, and then handed it
                                        over to the frontend developer upon
                                        completion.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="mb-2 font-bold">Skills</div>
                                <Space size={[0, 8]} wrap>
                                    <Tag>HTML</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>JavaScript</Tag>
                                    <Tag>Pug.js</Tag>
                                    <Tag>jQuery</Tag>
                                    <Tag>SCSS</Tag>
                                    <Tag>Bootstrap</Tag>
                                </Space>
                            </div>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card
                            title={
                                <>
                                    <div className="font-large">
                                        UX/UI Designer &amp; Frontend Developer
                                    </div>
                                    <div className="mt-1">
                                        <FileOutlined className="font-title" />
                                        <span className="ml-1 font-small">
                                            SHAL: SHopping and Auction via Line
                                            Project
                                        </span>
                                        <span className="mx-2 font-title color-gray">
                                            &#8226;
                                        </span>
                                        <span className="font-small">
                                            Graduation Project
                                        </span>
                                    </div>
                                </>
                            }
                            extra={
                                <div className="font-small">
                                    March 2022 - November 2022
                                </div>
                            }
                        >
                            <div className="mb-3">
                                <p className="indent-4">
                                    SHAL, also known as SHopping and Auction via
                                    Line, is an online shopping platform within
                                    the Line LIFF application. It enables users
                                    have more choices to buy, sell, and auction
                                    products with the assistance of a chatbot
                                    notification in the Line application,
                                    ensuring that buyers get the best prices.
                                    Additionally, it provides sellers with the
                                    opportunity to reach a broader customer base
                                    through this platform.
                                </p>
                            </div>
                            <div className="mb-3">
                                <div className="mb-2 font-bold">
                                    Responsibilities
                                </div>
                                <ul>
                                    <li>
                                        Designed user interfaces and optimized
                                        user experiences for:
                                        <br />
                                        &#9642; Desktop and tablet devices in
                                        the administrator role.
                                        <br />
                                        &#9642; Mobile devices in the roles of
                                        seller, buyer, and unauthorized user.
                                    </li>
                                    <li>
                                        Developed and implemented the frontend
                                        code based on user interface design.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="mb-2 font-bold">Skills</div>
                                <Space size={[0, 8]} wrap>
                                    <Tag>Vue.js</Tag>
                                    <Tag>Tailwind CSS</Tag>
                                    <Tag>Figma</Tag>
                                </Space>
                            </div>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card
                            title={
                                <>
                                    <div className="font-large">
                                        UX/UI Designer &amp; Frontend Developer
                                    </div>
                                    <div className="mt-1">
                                        <TeamOutlined className="font-title" />
                                        <span className="ml-1 font-small">
                                            CMU-TRP Dev Team
                                        </span>
                                    </div>
                                </>
                            }
                            extra={
                                <div className="font-small">
                                    December 2021 - May 2022
                                </div>
                            }
                        >
                            <div className="mb-3">
                                <div className="mb-2 font-bold">
                                    Responsibilities
                                </div>
                                <ul>
                                    <li>
                                        Designed user interfaces for desktop,
                                        tablet, and mobile devices in both of
                                        administrative and user roles.
                                    </li>
                                    <li>
                                        Developed and implemented the frontend
                                        code based on user interface design.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="mb-2 font-bold">Skills</div>
                                <Space size={[0, 8]} wrap>
                                    <Tag>Vue.js</Tag>
                                    <Tag>Tailwind CSS</Tag>
                                    <Tag>Quasar Framework</Tag>
                                    <Tag>Figma</Tag>
                                </Space>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Fade>
        </div>
    );
}

export default Experiences;
