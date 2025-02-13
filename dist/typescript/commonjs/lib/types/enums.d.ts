/**
 * Role is the producer of the content.
 * @public
 */
export type Role = (typeof POSSIBLE_ROLES)[number];
/**
 * Possible roles.
 * @public
 */
export declare const POSSIBLE_ROLES: readonly ["user", "model", "function", "system"];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
export declare enum HarmCategory {
    HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH",
    HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT",
    HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT"
}
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
export declare enum HarmBlockThreshold {
    BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
    BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
    BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
    BLOCK_NONE = "BLOCK_NONE"
}
/**
 * @public
 */
export declare enum HarmBlockMethod {
    SEVERITY = "SEVERITY",
    PROBABILITY = "PROBABILITY"
}
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
export declare enum HarmProbability {
    NEGLIGIBLE = "NEGLIGIBLE",
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
/**
 * Harm severity levels.
 * @public
 */
export declare enum HarmSeverity {
    HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE",
    HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW",
    HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM",
    HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH"
}
/**
 * Reason that a prompt was blocked.
 * @public
 */
export declare enum BlockReason {
    SAFETY = "SAFETY",
    OTHER = "OTHER"
}
/**
 * Reason that a candidate finished.
 * @public
 */
export declare enum FinishReason {
    STOP = "STOP",
    MAX_TOKENS = "MAX_TOKENS",
    SAFETY = "SAFETY",
    RECITATION = "RECITATION",
    OTHER = "OTHER"
}
/**
 * @public
 */
export declare enum FunctionCallingMode {
    AUTO = "AUTO",
    ANY = "ANY",
    NONE = "NONE"
}
//# sourceMappingURL=enums.d.ts.map