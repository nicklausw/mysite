import Image, { ImageProps, ImageLoader } from 'next/image'

// next.js REALLY wants you to use an image optimizer.
// none is provided for static site exports.
// so we don't use one.
// https://github.com/vercel/next.js/discussions/19065

const customLoader: ImageLoader = ({ src }) => {
  return src
}

export default function ImageObj(props: ImageProps) {
  return (
    <Image unoptimized {...props} loader={customLoader}/>
  );
}