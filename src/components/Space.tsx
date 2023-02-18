interface ISpace {
    width?: string;
    height?: string;
}

export function Space({width, height}: ISpace) {
    return <div style={{width: width ?? "0.0px", height: height ?? "0.0px"}}></div>
}