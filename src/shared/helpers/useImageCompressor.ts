import Pica from "pica";
const pica = Pica();

export const QUALITY = {
  HIGH: [1, 1080], // FIXME : HARUSNYA 1080 BUT STILL BUGGY
  MEDIUM: [1, 720],
  LOW: [0.5, 480],
}

export default class NgcPica {
  file;
  preview;
  quality;
  targetMaxSize;
  /**
   * This package is a pica wrapper for compressing the image to target file size without confusing the width and height of the image
   * @param {Blob} file Blob file
   * @param {String} preview Url using URL.createObjectURL(blob) method
   * @param {Number} quality Double 0.1 - 1, close to 1 means better quality 
   * @param {Number} targetMaxSize Size in bytes. If the image size is lower than targetMaxSize, compressing is skipped
   */
  constructor(file: Blob, preview: string, quality: number, targetMaxSize: number) {
    this.file = file;
    this.preview = preview;
    this.quality = quality;
    this.targetMaxSize = targetMaxSize;
  }

  /**
   * 
   * @returns {Blob} The result of compressing
   */
  async compress() {
    const img = await this.getImageInformation(this.preview);

    // initial value
    const srcWidth = img.width;
    const srcHeight = img.height;
    const srcPreview = img.preview;
    const srcType = this.file.type;
    const compressQuality = this.quality;
    const maxSize = this.targetMaxSize;

    // skip compressing if width and height value < maxSize
    if (srcHeight <= maxSize && srcHeight <= maxSize) {
      return this.file;
    }
    const bestSize = this.findBestSize(srcWidth, srcHeight, maxSize);
    const imgToResizedCanvas = await this.compressImage(
      srcPreview,
      bestSize.width,
      bestSize.height
    );
    const convertedToBlob = await this.convertToBlob(
      imgToResizedCanvas,
      srcType,
      compressQuality
    );

    return convertedToBlob;
  }

  async getImageInformation(imagePreview: string): Promise<{ width: any, height: any, preview: any }> {
    const img = new Image();
    img.src = imagePreview;
    return new Promise((resolve, reject) => {
      img.src = imagePreview;
      img.onload = () =>
        resolve({
          width: img.width,
          height: img.height,
          preview: img
        });
      img.onerror = reject;
    });
  }

  /*
  | MaxSize = scale width and height to ..
  | Return origin size when origin size not need to compress
  |
  */
  findBestSize(srcWidth: number, srcHeight: number, maxSize: number) {
    // find which has bigger value between srcWidth and srcHeight
    const isWidthBigger = srcWidth > srcHeight;
    let sizeReducer = 0;
    let resultWidth = 0;
    let resultHeight = 0;

    // resize based on width bigger than height
    if (isWidthBigger) {
      sizeReducer = srcWidth / maxSize;
      resultWidth = srcWidth / sizeReducer;
      resultHeight = srcHeight / sizeReducer;
    } else {
      sizeReducer = srcHeight / maxSize;
      resultWidth = srcWidth / sizeReducer;
      resultHeight = srcHeight / sizeReducer;
    }

    const result = {
      reduceDevider: sizeReducer,
      width: Math.round(resultWidth),
      height: Math.round(resultHeight),
    };

    return result;
  }

  async compressImage(srcPreview: any, toWidth: number, toHeight: number) {
    const resizedCanvas = document.createElement("canvas");
    resizedCanvas.width = toWidth;
    resizedCanvas.height = toHeight;

    const result = await pica
      .resize(srcPreview, resizedCanvas) // ref ganti dong
      .catch(error => alert(error));
    return result;
  }

  async convertToBlob(compressImage: HTMLCanvasElement | void, srcType: string, quality: number) {
    const blob = await pica
      .toBlob(compressImage!, srcType, quality)
      .catch(error => alert(error));
    return blob;
  }
}
