export interface ProjectProps {
   title: string;
   status?: string;
   imgUrl: string;
   videoUrl?: string;
   cropVideoTop?: boolean;
   preserveImageAspect?: boolean;
   tech: string[];
   liveSite?: string;
   seeCode?: string;
   description: string;
}
