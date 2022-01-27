import { IThumbnail } from "../models/IThumbnail";

export const ThumbnailPathTransformer = (thumbnail: IThumbnail): string => {
  return `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`
}
