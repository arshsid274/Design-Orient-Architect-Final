import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = ({ images = [] }) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
        >
            <Masonry>
                {images.map((img, index) => (
                    <div key={index}>
                        <a href={img.src} target="_blank" rel="noopener noreferrer">
                            <img
                                alt={img.alt || `Gallery Image ${index + 1}`}
                                src={img.src}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </a>
                    </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default Gallery;
