function ImageGallery() {
  const images = [
    { src: 'https://picsum.photos/id/1015/200/150', alt: 'Горный пейзаж' },
    { src: 'https://picsum.photos/id/1025/200/150', alt: 'Собака' },
    { src: 'https://picsum.photos/id/1035/200/150', alt: 'Лес' },
  ];

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {images.map((img) => (
        <img key={img.src} src={img.src} alt={img.alt} width={200} height={150} />
      ))}
    </div>
  );
}

export default ImageGallery;