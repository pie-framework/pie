export type Mode = "gather" | "view" | "evaluate";


export interface PieModel {
    /** Identifier to identify the Pie Element in html markup, Must be unique within a pie item config. */
    id: string,
    /** The html Element tag name */
    element: string;
    // supports 'excess' properties as may be defined in pie models
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#strict-object-literal-assignment-checking
    [x: string]: any;
}


// TODO - pulled from pie-player, these types should be centralized
export interface PieContent {
    id: string;
    /**
     * Set of elements to include in the pie, provided in the format `{'element-name': 'mpm-package-name'}`
     * @deprecated - use `pies` instead.
     */
    elements: PieItemElement;

    pies?: PieDef[],

    /** Models for each PIE included in the item */
    models: PieModel[]

    markup?: string;

    bundle?: BundleInfo;
}

export type PieDef = {
    modules?: PieModulesDef;
    elements?: PieElementsDef;
    name?: string;
    package?: string;
    tag: string;
}

export type PieModulesDef = {
    controller?: string ;
    [x: string]: any;
}

/**
 * Provides the url specifier for an ES Module whose default constructor is a custom element constructor.
 */
export type PieElementsDef = {
    config?: string;
    render: string;
    [x: string]: any;
}

export type BundleInfo = {
    url: string;
    hash: string;
};

export type ItemSession = {
    id: string;
    data: any[];
};


export interface PieItemElement {
    [elementName: string]: string
}

interface AdvancedItemConfig {
    id: string;
    pie: PieContent;
    stimulus?: PieContent;
    instructorResources?: [PieContent];
  }

export type ItemConfig = PieContent | AdvancedItemConfig;


export interface Score {
    id: string;
    score: number;
    element: string;
    error?: string;
  }
  

export enum ScoreType {
    AUTO = "auto",
    MANUAL = "manual",
  }
  
  export interface SessionScore {
    points: number;
    max: number;
    type?: ScoreType;
  }
  
  export interface ManualScore extends SessionScore {}
  
  export interface AutoScore extends SessionScore {
    elements?: any[];
    partialScoring: boolean;
  }
  
  export interface NoManualScore {
    message: string;
  }