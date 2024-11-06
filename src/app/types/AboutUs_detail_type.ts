import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default interface IAboutusList {
    title: string;
    description: string;
    image: StaticImport;
}