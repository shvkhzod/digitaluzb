export type CourseType = {
    name: string;
    url: string,
    category: "programming" | "design" | "marketing";
    topics: Topic[];

}

export type Topic = {
    title: string;
    url: string;
    intro: string;
    author: string;
    content: Block[]
}

export type Block = {
    heading?: string;
    subheading?: string;
    paragraph?: string;
    image?: string;
    tip?: string;
    extra?: Extra[];
}

export type Extra = {
    link?: string;
    text?: string;
    buttons?: string[];
}