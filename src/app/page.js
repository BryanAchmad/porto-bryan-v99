"use client";
import Image from "next/image";
import styles from "./page.module.css";
// import styled from "styled-components";
import SignatureImage from "./component/AnimatedSvg/signatureImage/SignatureImage";
import {
    RiLinkedinBoxLine,
    RiInstagramLine,
    RiGithubLine,
    RiMailLine,
} from "react-icons/ri";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headergrid} style={{ height: "40px" }}>
                    <div className={styles.colone}></div>
                    <div className={styles.coltwo}></div>
                    <div className={styles.colthree}></div>
                    <div className={styles.colfourupper}></div>
                </div>
            </div>
            {/* <UpHeader></UpHeader> */}
            <header className={styles.header}>
                <div className={styles.headergrid} style={{ height: "auto" }}>
                    <div className={styles.colone}>
                        <div
                            style={{
                                margin: "0",
                                padding: "0",
                                position: "relative",
                                width: "max-content",
                            }}
                        >
                            <Image
                                className={styles.bryanimage}
                                src={"./Bryan.svg"}
                                alt=""
                                width={180}
                                height={180}
                            />
                            {/* <div className={styles.comictext}>
                                <span>Hai Dude 👦</span>
                                <svg
                                    viewBox="0 0 22 18"
                                    fill="none"
                                    // class="absolute -bottom-[9px] left-[7px] w-5 text-green-500"
                                    className={styles.toel}
                                >
                                    <path
                                        d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div> */}
                        </div>
                        {/* <span className={styles.bryantext}>Bryan.</span> */}
                    </div>
                    <div className={styles.coltwo}></div>
                    <div className={styles.colthree}></div>
                    <div className={styles.colfour}>
                        <span
                            style={{
                                width: "100%",
                                fontSize: "20px",
                                fontFamily: "var(--font-inter)",
                            }}
                        >
                            Recent Playing
                        </span>
                        <div className={styles.line}></div>

                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                gap: "16px",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            <Link
                                className={styles.music}
                                href={
                                    "https://open.spotify.com/track/1nFtiJxYdhtFfFtfXBv06s?si=b934a8764c6c474c"
                                }
                            >
                                <div className={styles.musicdetail}>
                                    <span
                                        style={{
                                            width: "100%",
                                            fontFamily: "var(--font-inter)",
                                            fontWeight: "500",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Nirvana
                                    </span>
                                    <span
                                        style={{
                                            width: "100%",
                                            fontFamily: "var(--font-inter)",
                                            fontWeight: "200",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Hail TO the king
                                    </span>
                                </div>
                                <Image
                                    className={styles.discimage}
                                    src={"/disc.png"}
                                    alt=""
                                    width={44}
                                    height={44}
                                />
                            </Link>

                            {/* test
                            </Link> */}
                            {/* <Image
                                style={{ margin: 0 }}
                                src={"./next.svg"}
                                alt=""
                                height={64}
                                width={64}
                            /> */}
                        </div>
                    </div>
                </div>
                {/* <h1 style={{ fontFamily: "var(--font-inter)" }}>test2</h1> */}
            </header>
            <section style={{ width: "100%" }}>
                <div className={styles.headergrid} style={{ height: "auto" }}>
                    <div className={styles.colone}>
                        <div className={styles.sectiononeflex}>
                            <span className={styles.aboutme}>About Me</span>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: "16px",
                                    fontFamily: "var(--font-inter)",
                                    lineHeight: "24px",
                                }}
                            >
                                I’m a basic person from Indonesia working as a
                                software engineer in{" "}
                                <span
                                    style={{
                                        textDecoration: "underline",
                                        color: "#2a323e",
                                    }}
                                >
                                    ICUBE by SIRCLO
                                </span>
                                . Right now, i&apos;m trying my best to give a
                                love into my lovely cat, <span>ojan</span>.
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: "16px",
                                    fontFamily: "var(--font-inter)",
                                    lineHeight: "24px",
                                }}
                            >
                                I like to play basketball. Sometimes i do
                                billiard too, but in my phone 😁. Love to learn
                                something new if i have a glass of coffee in my
                                hand.
                            </p>
                            <div className={styles.containerttd}>
                                <SignatureImage />
                            </div>
                        </div>
                    </div>
                    <div className={styles.colone}>
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                margin: "0",
                                padding: "0",
                                // borderRadius: "24px",
                            }}
                        >
                            <Image
                                className={styles.photoojan}
                                src={"/ojan.webp"}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    {/* <div className={styles.colthree}></div> */}
                    <div className={styles.colfoursecond}>
                        <span className={styles.aboutme}>Find Me At</span>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                gap: "8px",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: 0,
                                padding: "12px",
                                border: "1px solid #2a323e",
                            }}
                        >
                            <RiLinkedinBoxLine className={styles.icon} />
                            <span
                                style={{
                                    margin: "0",
                                    alignItems: "flex-start",
                                    fontSize: "14px",
                                    fontFamily: "var(--font-inter)",
                                    lineHeight: "16px",
                                }}
                            >
                                @bryanachmad
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                gap: "8px",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: 0,
                                padding: "12px",
                                border: "1px solid #2a323e",
                            }}
                        >
                            <RiInstagramLine className={styles.icon} />
                            <span
                                style={{
                                    margin: "0",
                                    alignItems: "flex-start",
                                    fontSize: "14px",
                                    fontFamily: "var(--font-inter)",
                                    lineHeight: "16px",
                                }}
                            >
                                @bryanbrian__
                            </span>
                        </div>
                        <Link href={"#"} className={styles.link}>
                            <RiGithubLine className={styles.icon} />
                            <span
                                style={{
                                    margin: "0",
                                    alignItems: "flex-start",
                                    fontSize: "14px",
                                    fontFamily: "var(--font-inter)",
                                    lineHeight: "16px",
                                }}
                            >
                                @bryanachmad
                            </span>
                        </Link>
                        <Link href={"#"} className={styles.link}>
                            <RiMailLine className={styles.icon} />
                            <span
                                style={{
                                    margin: "0",
                                    alignItems: "flex-start",
                                    fontSize: "14px",
                                    fontFamily: "var(--font-inter)",
                                    lineHeight: "16px",
                                }}
                            >
                                bryanachmad08@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
