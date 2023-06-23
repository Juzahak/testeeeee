'use client'
import Image from 'next/image'
import styles from './page.module.css'
import SignaturePad from 'signature_pad';
import { useEffect, useState, useRef } from "react";
export default function Home() {
  const canvasRef = useRef(null);
  let signaturePad = useRef(null);

  useEffect(() => {
    signaturePad.current = new SignaturePad(canvasRef.current);
  }, []);

  const handleSaveSignature = async () => {
    const signatureImage = signaturePad.current.toDataURL();
    setAssinatura(signaturePad.current.toDataURL())
    setLiberado(true);
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div className="d-flex flex-column align-items-center mt-3">
                            <div style={{ width: '400px', boxShadow: '0 0 10px' }}>

                              <canvas ref={canvasRef} width="400" height="200"></canvas>
                            </div>
                            <div className="col-md-12 mt-4 d-flex justify-content-center text-center">
                              <div
                                onClick={handleSaveSignature}
                                className="btn btn-sm btn-primary qty_close"
                                style={{ width: '250px' }}
                              >
                                Salvar Assinatura
                              </div>
                            </div>
                          </div>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
