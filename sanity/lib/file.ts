import { getFileAsset } from '@sanity/asset-utils'

import { dataset, projectId } from '../env'

export const generateFileURL = (fileRef: string) =>
  getFileAsset(fileRef, {
    projectId,
    dataset,
  }).url
