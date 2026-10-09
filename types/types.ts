export interface ProjectProps {
  title: string
  status?: string
  imgUrl: string
  gallery?: {
    src: string
    alt: string
    label: string
  }[]
  videoUrl?: string
  cropVideoTop?: boolean
  preserveImageAspect?: boolean
  tech: string[]
  liveSite?: string
  seeCode?: string
  homepageOutcome?: string
  description: string
}
