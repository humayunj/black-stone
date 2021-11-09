import React from "react";
import styles from "./Grid.module.css";
import Photo from "./Photo";
import usePhotos from "../../lib/usePhotos";
import PhotoModal from "../PhotoGrid/PhotoModal";
import { useState } from "react";

export function Footer(props) {
  return (
    <a
      className={styles.footer}
      href="https://fluidcms.vercel.app"
      style={{
        textDecoration: "none",
        cursor: "pointer",
        width: "max-content",
      }}
      target="_blank"
    >
      FluidCMS{" "}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
    </a>
  );
}

export default function PhotoGrid(props) {
  const [photos, loadPhotos] = usePhotos();
  const [modalIndex, setModalIndex] = useState(-1);
  if (!photos) {
    loadPhotos();
  }

  return (
    <>
      <div className={styles.grid}>
        {photos
          ? photos.map((img, ind) => (
              <Photo photoSrc={img.sm} showModal={() => setModalIndex(ind)} />
            ))
          : [...new Array(10).keys()].map(() => <Photo photoSrc="" />)}
      </div>
      <Footer />
      {photos && modalIndex > -1 && (
        <PhotoModal
          photoList={photos}
          startIndex={modalIndex}
          hideModal={() => setModalIndex(-1)}
        />
      )}
    </>
  );
}
