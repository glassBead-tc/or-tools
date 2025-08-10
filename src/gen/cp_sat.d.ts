import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace operations_research. */
export namespace operations_research {

    /** Namespace sat. */
    namespace sat {

        /** Properties of an IntegerVariableProto. */
        interface IIntegerVariableProto {

            /** IntegerVariableProto name */
            name?: (string|null);

            /** IntegerVariableProto domain */
            domain?: ((number|Long)[]|null);
        }

        /** Represents an IntegerVariableProto. */
        class IntegerVariableProto implements IIntegerVariableProto {

            /**
             * Constructs a new IntegerVariableProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IIntegerVariableProto);

            /** IntegerVariableProto name. */
            public name: string;

            /** IntegerVariableProto domain. */
            public domain: (number|Long)[];

            /**
             * Creates a new IntegerVariableProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IntegerVariableProto instance
             */
            public static create(properties?: operations_research.sat.IIntegerVariableProto): operations_research.sat.IntegerVariableProto;

            /**
             * Encodes the specified IntegerVariableProto message. Does not implicitly {@link operations_research.sat.IntegerVariableProto.verify|verify} messages.
             * @param message IntegerVariableProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IIntegerVariableProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IntegerVariableProto message, length delimited. Does not implicitly {@link operations_research.sat.IntegerVariableProto.verify|verify} messages.
             * @param message IntegerVariableProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IIntegerVariableProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IntegerVariableProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntegerVariableProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.IntegerVariableProto;

            /**
             * Decodes an IntegerVariableProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IntegerVariableProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.IntegerVariableProto;

            /**
             * Verifies an IntegerVariableProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IntegerVariableProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IntegerVariableProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.IntegerVariableProto;

            /**
             * Creates a plain object from an IntegerVariableProto message. Also converts values to other types if specified.
             * @param message IntegerVariableProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.IntegerVariableProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IntegerVariableProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IntegerVariableProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolArgumentProto. */
        interface IBoolArgumentProto {

            /** BoolArgumentProto literals */
            literals?: (number[]|null);
        }

        /** Represents a BoolArgumentProto. */
        class BoolArgumentProto implements IBoolArgumentProto {

            /**
             * Constructs a new BoolArgumentProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IBoolArgumentProto);

            /** BoolArgumentProto literals. */
            public literals: number[];

            /**
             * Creates a new BoolArgumentProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolArgumentProto instance
             */
            public static create(properties?: operations_research.sat.IBoolArgumentProto): operations_research.sat.BoolArgumentProto;

            /**
             * Encodes the specified BoolArgumentProto message. Does not implicitly {@link operations_research.sat.BoolArgumentProto.verify|verify} messages.
             * @param message BoolArgumentProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IBoolArgumentProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolArgumentProto message, length delimited. Does not implicitly {@link operations_research.sat.BoolArgumentProto.verify|verify} messages.
             * @param message BoolArgumentProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IBoolArgumentProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolArgumentProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolArgumentProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.BoolArgumentProto;

            /**
             * Decodes a BoolArgumentProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolArgumentProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.BoolArgumentProto;

            /**
             * Verifies a BoolArgumentProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolArgumentProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolArgumentProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.BoolArgumentProto;

            /**
             * Creates a plain object from a BoolArgumentProto message. Also converts values to other types if specified.
             * @param message BoolArgumentProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.BoolArgumentProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolArgumentProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolArgumentProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LinearExpressionProto. */
        interface ILinearExpressionProto {

            /** LinearExpressionProto vars */
            vars?: (number[]|null);

            /** LinearExpressionProto coeffs */
            coeffs?: ((number|Long)[]|null);

            /** LinearExpressionProto offset */
            offset?: (number|Long|null);
        }

        /** Represents a LinearExpressionProto. */
        class LinearExpressionProto implements ILinearExpressionProto {

            /**
             * Constructs a new LinearExpressionProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ILinearExpressionProto);

            /** LinearExpressionProto vars. */
            public vars: number[];

            /** LinearExpressionProto coeffs. */
            public coeffs: (number|Long)[];

            /** LinearExpressionProto offset. */
            public offset: (number|Long);

            /**
             * Creates a new LinearExpressionProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LinearExpressionProto instance
             */
            public static create(properties?: operations_research.sat.ILinearExpressionProto): operations_research.sat.LinearExpressionProto;

            /**
             * Encodes the specified LinearExpressionProto message. Does not implicitly {@link operations_research.sat.LinearExpressionProto.verify|verify} messages.
             * @param message LinearExpressionProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ILinearExpressionProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LinearExpressionProto message, length delimited. Does not implicitly {@link operations_research.sat.LinearExpressionProto.verify|verify} messages.
             * @param message LinearExpressionProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ILinearExpressionProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LinearExpressionProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LinearExpressionProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.LinearExpressionProto;

            /**
             * Decodes a LinearExpressionProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LinearExpressionProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.LinearExpressionProto;

            /**
             * Verifies a LinearExpressionProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LinearExpressionProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LinearExpressionProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.LinearExpressionProto;

            /**
             * Creates a plain object from a LinearExpressionProto message. Also converts values to other types if specified.
             * @param message LinearExpressionProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.LinearExpressionProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LinearExpressionProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LinearExpressionProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LinearArgumentProto. */
        interface ILinearArgumentProto {

            /** LinearArgumentProto target */
            target?: (operations_research.sat.ILinearExpressionProto|null);

            /** LinearArgumentProto exprs */
            exprs?: (operations_research.sat.ILinearExpressionProto[]|null);
        }

        /** Represents a LinearArgumentProto. */
        class LinearArgumentProto implements ILinearArgumentProto {

            /**
             * Constructs a new LinearArgumentProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ILinearArgumentProto);

            /** LinearArgumentProto target. */
            public target?: (operations_research.sat.ILinearExpressionProto|null);

            /** LinearArgumentProto exprs. */
            public exprs: operations_research.sat.ILinearExpressionProto[];

            /**
             * Creates a new LinearArgumentProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LinearArgumentProto instance
             */
            public static create(properties?: operations_research.sat.ILinearArgumentProto): operations_research.sat.LinearArgumentProto;

            /**
             * Encodes the specified LinearArgumentProto message. Does not implicitly {@link operations_research.sat.LinearArgumentProto.verify|verify} messages.
             * @param message LinearArgumentProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ILinearArgumentProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LinearArgumentProto message, length delimited. Does not implicitly {@link operations_research.sat.LinearArgumentProto.verify|verify} messages.
             * @param message LinearArgumentProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ILinearArgumentProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LinearArgumentProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LinearArgumentProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.LinearArgumentProto;

            /**
             * Decodes a LinearArgumentProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LinearArgumentProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.LinearArgumentProto;

            /**
             * Verifies a LinearArgumentProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LinearArgumentProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LinearArgumentProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.LinearArgumentProto;

            /**
             * Creates a plain object from a LinearArgumentProto message. Also converts values to other types if specified.
             * @param message LinearArgumentProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.LinearArgumentProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LinearArgumentProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LinearArgumentProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AllDifferentConstraintProto. */
        interface IAllDifferentConstraintProto {

            /** AllDifferentConstraintProto exprs */
            exprs?: (operations_research.sat.ILinearExpressionProto[]|null);
        }

        /** Represents an AllDifferentConstraintProto. */
        class AllDifferentConstraintProto implements IAllDifferentConstraintProto {

            /**
             * Constructs a new AllDifferentConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IAllDifferentConstraintProto);

            /** AllDifferentConstraintProto exprs. */
            public exprs: operations_research.sat.ILinearExpressionProto[];

            /**
             * Creates a new AllDifferentConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllDifferentConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IAllDifferentConstraintProto): operations_research.sat.AllDifferentConstraintProto;

            /**
             * Encodes the specified AllDifferentConstraintProto message. Does not implicitly {@link operations_research.sat.AllDifferentConstraintProto.verify|verify} messages.
             * @param message AllDifferentConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IAllDifferentConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllDifferentConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.AllDifferentConstraintProto.verify|verify} messages.
             * @param message AllDifferentConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IAllDifferentConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllDifferentConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllDifferentConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.AllDifferentConstraintProto;

            /**
             * Decodes an AllDifferentConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllDifferentConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.AllDifferentConstraintProto;

            /**
             * Verifies an AllDifferentConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllDifferentConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllDifferentConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.AllDifferentConstraintProto;

            /**
             * Creates a plain object from an AllDifferentConstraintProto message. Also converts values to other types if specified.
             * @param message AllDifferentConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.AllDifferentConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllDifferentConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AllDifferentConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LinearConstraintProto. */
        interface ILinearConstraintProto {

            /** LinearConstraintProto vars */
            vars?: (number[]|null);

            /** LinearConstraintProto coeffs */
            coeffs?: ((number|Long)[]|null);

            /** LinearConstraintProto domain */
            domain?: ((number|Long)[]|null);
        }

        /** Represents a LinearConstraintProto. */
        class LinearConstraintProto implements ILinearConstraintProto {

            /**
             * Constructs a new LinearConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ILinearConstraintProto);

            /** LinearConstraintProto vars. */
            public vars: number[];

            /** LinearConstraintProto coeffs. */
            public coeffs: (number|Long)[];

            /** LinearConstraintProto domain. */
            public domain: (number|Long)[];

            /**
             * Creates a new LinearConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LinearConstraintProto instance
             */
            public static create(properties?: operations_research.sat.ILinearConstraintProto): operations_research.sat.LinearConstraintProto;

            /**
             * Encodes the specified LinearConstraintProto message. Does not implicitly {@link operations_research.sat.LinearConstraintProto.verify|verify} messages.
             * @param message LinearConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ILinearConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LinearConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.LinearConstraintProto.verify|verify} messages.
             * @param message LinearConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ILinearConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LinearConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LinearConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.LinearConstraintProto;

            /**
             * Decodes a LinearConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LinearConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.LinearConstraintProto;

            /**
             * Verifies a LinearConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LinearConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LinearConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.LinearConstraintProto;

            /**
             * Creates a plain object from a LinearConstraintProto message. Also converts values to other types if specified.
             * @param message LinearConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.LinearConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LinearConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LinearConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ElementConstraintProto. */
        interface IElementConstraintProto {

            /** ElementConstraintProto index */
            index?: (number|null);

            /** ElementConstraintProto target */
            target?: (number|null);

            /** ElementConstraintProto vars */
            vars?: (number[]|null);

            /** ElementConstraintProto linearIndex */
            linearIndex?: (operations_research.sat.ILinearExpressionProto|null);

            /** ElementConstraintProto linearTarget */
            linearTarget?: (operations_research.sat.ILinearExpressionProto|null);

            /** ElementConstraintProto exprs */
            exprs?: (operations_research.sat.ILinearExpressionProto[]|null);
        }

        /** Represents an ElementConstraintProto. */
        class ElementConstraintProto implements IElementConstraintProto {

            /**
             * Constructs a new ElementConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IElementConstraintProto);

            /** ElementConstraintProto index. */
            public index: number;

            /** ElementConstraintProto target. */
            public target: number;

            /** ElementConstraintProto vars. */
            public vars: number[];

            /** ElementConstraintProto linearIndex. */
            public linearIndex?: (operations_research.sat.ILinearExpressionProto|null);

            /** ElementConstraintProto linearTarget. */
            public linearTarget?: (operations_research.sat.ILinearExpressionProto|null);

            /** ElementConstraintProto exprs. */
            public exprs: operations_research.sat.ILinearExpressionProto[];

            /**
             * Creates a new ElementConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ElementConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IElementConstraintProto): operations_research.sat.ElementConstraintProto;

            /**
             * Encodes the specified ElementConstraintProto message. Does not implicitly {@link operations_research.sat.ElementConstraintProto.verify|verify} messages.
             * @param message ElementConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IElementConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ElementConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.ElementConstraintProto.verify|verify} messages.
             * @param message ElementConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IElementConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ElementConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ElementConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.ElementConstraintProto;

            /**
             * Decodes an ElementConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ElementConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.ElementConstraintProto;

            /**
             * Verifies an ElementConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ElementConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ElementConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.ElementConstraintProto;

            /**
             * Creates a plain object from an ElementConstraintProto message. Also converts values to other types if specified.
             * @param message ElementConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.ElementConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ElementConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ElementConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IntervalConstraintProto. */
        interface IIntervalConstraintProto {

            /** IntervalConstraintProto start */
            start?: (operations_research.sat.ILinearExpressionProto|null);

            /** IntervalConstraintProto end */
            end?: (operations_research.sat.ILinearExpressionProto|null);

            /** IntervalConstraintProto size */
            size?: (operations_research.sat.ILinearExpressionProto|null);
        }

        /** Represents an IntervalConstraintProto. */
        class IntervalConstraintProto implements IIntervalConstraintProto {

            /**
             * Constructs a new IntervalConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IIntervalConstraintProto);

            /** IntervalConstraintProto start. */
            public start?: (operations_research.sat.ILinearExpressionProto|null);

            /** IntervalConstraintProto end. */
            public end?: (operations_research.sat.ILinearExpressionProto|null);

            /** IntervalConstraintProto size. */
            public size?: (operations_research.sat.ILinearExpressionProto|null);

            /**
             * Creates a new IntervalConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IntervalConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IIntervalConstraintProto): operations_research.sat.IntervalConstraintProto;

            /**
             * Encodes the specified IntervalConstraintProto message. Does not implicitly {@link operations_research.sat.IntervalConstraintProto.verify|verify} messages.
             * @param message IntervalConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IIntervalConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IntervalConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.IntervalConstraintProto.verify|verify} messages.
             * @param message IntervalConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IIntervalConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IntervalConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IntervalConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.IntervalConstraintProto;

            /**
             * Decodes an IntervalConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IntervalConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.IntervalConstraintProto;

            /**
             * Verifies an IntervalConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IntervalConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IntervalConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.IntervalConstraintProto;

            /**
             * Creates a plain object from an IntervalConstraintProto message. Also converts values to other types if specified.
             * @param message IntervalConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.IntervalConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IntervalConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IntervalConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NoOverlapConstraintProto. */
        interface INoOverlapConstraintProto {

            /** NoOverlapConstraintProto intervals */
            intervals?: (number[]|null);
        }

        /** Represents a NoOverlapConstraintProto. */
        class NoOverlapConstraintProto implements INoOverlapConstraintProto {

            /**
             * Constructs a new NoOverlapConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.INoOverlapConstraintProto);

            /** NoOverlapConstraintProto intervals. */
            public intervals: number[];

            /**
             * Creates a new NoOverlapConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoOverlapConstraintProto instance
             */
            public static create(properties?: operations_research.sat.INoOverlapConstraintProto): operations_research.sat.NoOverlapConstraintProto;

            /**
             * Encodes the specified NoOverlapConstraintProto message. Does not implicitly {@link operations_research.sat.NoOverlapConstraintProto.verify|verify} messages.
             * @param message NoOverlapConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.INoOverlapConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoOverlapConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.NoOverlapConstraintProto.verify|verify} messages.
             * @param message NoOverlapConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.INoOverlapConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoOverlapConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NoOverlapConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.NoOverlapConstraintProto;

            /**
             * Decodes a NoOverlapConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NoOverlapConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.NoOverlapConstraintProto;

            /**
             * Verifies a NoOverlapConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoOverlapConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoOverlapConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.NoOverlapConstraintProto;

            /**
             * Creates a plain object from a NoOverlapConstraintProto message. Also converts values to other types if specified.
             * @param message NoOverlapConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.NoOverlapConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoOverlapConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NoOverlapConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NoOverlap2DConstraintProto. */
        interface INoOverlap2DConstraintProto {

            /** NoOverlap2DConstraintProto xIntervals */
            xIntervals?: (number[]|null);

            /** NoOverlap2DConstraintProto yIntervals */
            yIntervals?: (number[]|null);
        }

        /** Represents a NoOverlap2DConstraintProto. */
        class NoOverlap2DConstraintProto implements INoOverlap2DConstraintProto {

            /**
             * Constructs a new NoOverlap2DConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.INoOverlap2DConstraintProto);

            /** NoOverlap2DConstraintProto xIntervals. */
            public xIntervals: number[];

            /** NoOverlap2DConstraintProto yIntervals. */
            public yIntervals: number[];

            /**
             * Creates a new NoOverlap2DConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NoOverlap2DConstraintProto instance
             */
            public static create(properties?: operations_research.sat.INoOverlap2DConstraintProto): operations_research.sat.NoOverlap2DConstraintProto;

            /**
             * Encodes the specified NoOverlap2DConstraintProto message. Does not implicitly {@link operations_research.sat.NoOverlap2DConstraintProto.verify|verify} messages.
             * @param message NoOverlap2DConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.INoOverlap2DConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NoOverlap2DConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.NoOverlap2DConstraintProto.verify|verify} messages.
             * @param message NoOverlap2DConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.INoOverlap2DConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NoOverlap2DConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NoOverlap2DConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.NoOverlap2DConstraintProto;

            /**
             * Decodes a NoOverlap2DConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NoOverlap2DConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.NoOverlap2DConstraintProto;

            /**
             * Verifies a NoOverlap2DConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NoOverlap2DConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NoOverlap2DConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.NoOverlap2DConstraintProto;

            /**
             * Creates a plain object from a NoOverlap2DConstraintProto message. Also converts values to other types if specified.
             * @param message NoOverlap2DConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.NoOverlap2DConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NoOverlap2DConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NoOverlap2DConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CumulativeConstraintProto. */
        interface ICumulativeConstraintProto {

            /** CumulativeConstraintProto capacity */
            capacity?: (operations_research.sat.ILinearExpressionProto|null);

            /** CumulativeConstraintProto intervals */
            intervals?: (number[]|null);

            /** CumulativeConstraintProto demands */
            demands?: (operations_research.sat.ILinearExpressionProto[]|null);
        }

        /** Represents a CumulativeConstraintProto. */
        class CumulativeConstraintProto implements ICumulativeConstraintProto {

            /**
             * Constructs a new CumulativeConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ICumulativeConstraintProto);

            /** CumulativeConstraintProto capacity. */
            public capacity?: (operations_research.sat.ILinearExpressionProto|null);

            /** CumulativeConstraintProto intervals. */
            public intervals: number[];

            /** CumulativeConstraintProto demands. */
            public demands: operations_research.sat.ILinearExpressionProto[];

            /**
             * Creates a new CumulativeConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CumulativeConstraintProto instance
             */
            public static create(properties?: operations_research.sat.ICumulativeConstraintProto): operations_research.sat.CumulativeConstraintProto;

            /**
             * Encodes the specified CumulativeConstraintProto message. Does not implicitly {@link operations_research.sat.CumulativeConstraintProto.verify|verify} messages.
             * @param message CumulativeConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ICumulativeConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CumulativeConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.CumulativeConstraintProto.verify|verify} messages.
             * @param message CumulativeConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ICumulativeConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CumulativeConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CumulativeConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.CumulativeConstraintProto;

            /**
             * Decodes a CumulativeConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CumulativeConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.CumulativeConstraintProto;

            /**
             * Verifies a CumulativeConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CumulativeConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CumulativeConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.CumulativeConstraintProto;

            /**
             * Creates a plain object from a CumulativeConstraintProto message. Also converts values to other types if specified.
             * @param message CumulativeConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.CumulativeConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CumulativeConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CumulativeConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReservoirConstraintProto. */
        interface IReservoirConstraintProto {

            /** ReservoirConstraintProto minLevel */
            minLevel?: (number|Long|null);

            /** ReservoirConstraintProto maxLevel */
            maxLevel?: (number|Long|null);

            /** ReservoirConstraintProto timeExprs */
            timeExprs?: (operations_research.sat.ILinearExpressionProto[]|null);

            /** ReservoirConstraintProto levelChanges */
            levelChanges?: (operations_research.sat.ILinearExpressionProto[]|null);

            /** ReservoirConstraintProto activeLiterals */
            activeLiterals?: (number[]|null);
        }

        /** Represents a ReservoirConstraintProto. */
        class ReservoirConstraintProto implements IReservoirConstraintProto {

            /**
             * Constructs a new ReservoirConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IReservoirConstraintProto);

            /** ReservoirConstraintProto minLevel. */
            public minLevel: (number|Long);

            /** ReservoirConstraintProto maxLevel. */
            public maxLevel: (number|Long);

            /** ReservoirConstraintProto timeExprs. */
            public timeExprs: operations_research.sat.ILinearExpressionProto[];

            /** ReservoirConstraintProto levelChanges. */
            public levelChanges: operations_research.sat.ILinearExpressionProto[];

            /** ReservoirConstraintProto activeLiterals. */
            public activeLiterals: number[];

            /**
             * Creates a new ReservoirConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReservoirConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IReservoirConstraintProto): operations_research.sat.ReservoirConstraintProto;

            /**
             * Encodes the specified ReservoirConstraintProto message. Does not implicitly {@link operations_research.sat.ReservoirConstraintProto.verify|verify} messages.
             * @param message ReservoirConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IReservoirConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReservoirConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.ReservoirConstraintProto.verify|verify} messages.
             * @param message ReservoirConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IReservoirConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReservoirConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReservoirConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.ReservoirConstraintProto;

            /**
             * Decodes a ReservoirConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReservoirConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.ReservoirConstraintProto;

            /**
             * Verifies a ReservoirConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReservoirConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReservoirConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.ReservoirConstraintProto;

            /**
             * Creates a plain object from a ReservoirConstraintProto message. Also converts values to other types if specified.
             * @param message ReservoirConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.ReservoirConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReservoirConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReservoirConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CircuitConstraintProto. */
        interface ICircuitConstraintProto {

            /** CircuitConstraintProto tails */
            tails?: (number[]|null);

            /** CircuitConstraintProto heads */
            heads?: (number[]|null);

            /** CircuitConstraintProto literals */
            literals?: (number[]|null);
        }

        /** Represents a CircuitConstraintProto. */
        class CircuitConstraintProto implements ICircuitConstraintProto {

            /**
             * Constructs a new CircuitConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ICircuitConstraintProto);

            /** CircuitConstraintProto tails. */
            public tails: number[];

            /** CircuitConstraintProto heads. */
            public heads: number[];

            /** CircuitConstraintProto literals. */
            public literals: number[];

            /**
             * Creates a new CircuitConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CircuitConstraintProto instance
             */
            public static create(properties?: operations_research.sat.ICircuitConstraintProto): operations_research.sat.CircuitConstraintProto;

            /**
             * Encodes the specified CircuitConstraintProto message. Does not implicitly {@link operations_research.sat.CircuitConstraintProto.verify|verify} messages.
             * @param message CircuitConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ICircuitConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CircuitConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.CircuitConstraintProto.verify|verify} messages.
             * @param message CircuitConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ICircuitConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CircuitConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CircuitConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.CircuitConstraintProto;

            /**
             * Decodes a CircuitConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CircuitConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.CircuitConstraintProto;

            /**
             * Verifies a CircuitConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CircuitConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CircuitConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.CircuitConstraintProto;

            /**
             * Creates a plain object from a CircuitConstraintProto message. Also converts values to other types if specified.
             * @param message CircuitConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.CircuitConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CircuitConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CircuitConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RoutesConstraintProto. */
        interface IRoutesConstraintProto {

            /** RoutesConstraintProto tails */
            tails?: (number[]|null);

            /** RoutesConstraintProto heads */
            heads?: (number[]|null);

            /** RoutesConstraintProto literals */
            literals?: (number[]|null);

            /** RoutesConstraintProto demands */
            demands?: (number[]|null);

            /** RoutesConstraintProto capacity */
            capacity?: (number|Long|null);

            /** RoutesConstraintProto dimensions */
            dimensions?: (operations_research.sat.RoutesConstraintProto.INodeExpressions[]|null);
        }

        /** Represents a RoutesConstraintProto. */
        class RoutesConstraintProto implements IRoutesConstraintProto {

            /**
             * Constructs a new RoutesConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IRoutesConstraintProto);

            /** RoutesConstraintProto tails. */
            public tails: number[];

            /** RoutesConstraintProto heads. */
            public heads: number[];

            /** RoutesConstraintProto literals. */
            public literals: number[];

            /** RoutesConstraintProto demands. */
            public demands: number[];

            /** RoutesConstraintProto capacity. */
            public capacity: (number|Long);

            /** RoutesConstraintProto dimensions. */
            public dimensions: operations_research.sat.RoutesConstraintProto.INodeExpressions[];

            /**
             * Creates a new RoutesConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoutesConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IRoutesConstraintProto): operations_research.sat.RoutesConstraintProto;

            /**
             * Encodes the specified RoutesConstraintProto message. Does not implicitly {@link operations_research.sat.RoutesConstraintProto.verify|verify} messages.
             * @param message RoutesConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IRoutesConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoutesConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.RoutesConstraintProto.verify|verify} messages.
             * @param message RoutesConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IRoutesConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoutesConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoutesConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.RoutesConstraintProto;

            /**
             * Decodes a RoutesConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoutesConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.RoutesConstraintProto;

            /**
             * Verifies a RoutesConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoutesConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoutesConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.RoutesConstraintProto;

            /**
             * Creates a plain object from a RoutesConstraintProto message. Also converts values to other types if specified.
             * @param message RoutesConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.RoutesConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoutesConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoutesConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RoutesConstraintProto {

            /** Properties of a NodeExpressions. */
            interface INodeExpressions {

                /** NodeExpressions exprs */
                exprs?: (operations_research.sat.ILinearExpressionProto[]|null);
            }

            /** Represents a NodeExpressions. */
            class NodeExpressions implements INodeExpressions {

                /**
                 * Constructs a new NodeExpressions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: operations_research.sat.RoutesConstraintProto.INodeExpressions);

                /** NodeExpressions exprs. */
                public exprs: operations_research.sat.ILinearExpressionProto[];

                /**
                 * Creates a new NodeExpressions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodeExpressions instance
                 */
                public static create(properties?: operations_research.sat.RoutesConstraintProto.INodeExpressions): operations_research.sat.RoutesConstraintProto.NodeExpressions;

                /**
                 * Encodes the specified NodeExpressions message. Does not implicitly {@link operations_research.sat.RoutesConstraintProto.NodeExpressions.verify|verify} messages.
                 * @param message NodeExpressions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: operations_research.sat.RoutesConstraintProto.INodeExpressions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodeExpressions message, length delimited. Does not implicitly {@link operations_research.sat.RoutesConstraintProto.NodeExpressions.verify|verify} messages.
                 * @param message NodeExpressions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: operations_research.sat.RoutesConstraintProto.INodeExpressions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodeExpressions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodeExpressions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.RoutesConstraintProto.NodeExpressions;

                /**
                 * Decodes a NodeExpressions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodeExpressions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.RoutesConstraintProto.NodeExpressions;

                /**
                 * Verifies a NodeExpressions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NodeExpressions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NodeExpressions
                 */
                public static fromObject(object: { [k: string]: any }): operations_research.sat.RoutesConstraintProto.NodeExpressions;

                /**
                 * Creates a plain object from a NodeExpressions message. Also converts values to other types if specified.
                 * @param message NodeExpressions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: operations_research.sat.RoutesConstraintProto.NodeExpressions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodeExpressions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NodeExpressions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a TableConstraintProto. */
        interface ITableConstraintProto {

            /** TableConstraintProto vars */
            vars?: (number[]|null);

            /** TableConstraintProto values */
            values?: ((number|Long)[]|null);

            /** TableConstraintProto exprs */
            exprs?: (operations_research.sat.ILinearExpressionProto[]|null);

            /** TableConstraintProto negated */
            negated?: (boolean|null);
        }

        /** Represents a TableConstraintProto. */
        class TableConstraintProto implements ITableConstraintProto {

            /**
             * Constructs a new TableConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ITableConstraintProto);

            /** TableConstraintProto vars. */
            public vars: number[];

            /** TableConstraintProto values. */
            public values: (number|Long)[];

            /** TableConstraintProto exprs. */
            public exprs: operations_research.sat.ILinearExpressionProto[];

            /** TableConstraintProto negated. */
            public negated: boolean;

            /**
             * Creates a new TableConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TableConstraintProto instance
             */
            public static create(properties?: operations_research.sat.ITableConstraintProto): operations_research.sat.TableConstraintProto;

            /**
             * Encodes the specified TableConstraintProto message. Does not implicitly {@link operations_research.sat.TableConstraintProto.verify|verify} messages.
             * @param message TableConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ITableConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TableConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.TableConstraintProto.verify|verify} messages.
             * @param message TableConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ITableConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TableConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TableConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.TableConstraintProto;

            /**
             * Decodes a TableConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TableConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.TableConstraintProto;

            /**
             * Verifies a TableConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TableConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TableConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.TableConstraintProto;

            /**
             * Creates a plain object from a TableConstraintProto message. Also converts values to other types if specified.
             * @param message TableConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.TableConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TableConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TableConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InverseConstraintProto. */
        interface IInverseConstraintProto {

            /** InverseConstraintProto fDirect */
            fDirect?: (number[]|null);

            /** InverseConstraintProto fInverse */
            fInverse?: (number[]|null);
        }

        /** Represents an InverseConstraintProto. */
        class InverseConstraintProto implements IInverseConstraintProto {

            /**
             * Constructs a new InverseConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IInverseConstraintProto);

            /** InverseConstraintProto fDirect. */
            public fDirect: number[];

            /** InverseConstraintProto fInverse. */
            public fInverse: number[];

            /**
             * Creates a new InverseConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InverseConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IInverseConstraintProto): operations_research.sat.InverseConstraintProto;

            /**
             * Encodes the specified InverseConstraintProto message. Does not implicitly {@link operations_research.sat.InverseConstraintProto.verify|verify} messages.
             * @param message InverseConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IInverseConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InverseConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.InverseConstraintProto.verify|verify} messages.
             * @param message InverseConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IInverseConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InverseConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InverseConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.InverseConstraintProto;

            /**
             * Decodes an InverseConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InverseConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.InverseConstraintProto;

            /**
             * Verifies an InverseConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InverseConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InverseConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.InverseConstraintProto;

            /**
             * Creates a plain object from an InverseConstraintProto message. Also converts values to other types if specified.
             * @param message InverseConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.InverseConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InverseConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InverseConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AutomatonConstraintProto. */
        interface IAutomatonConstraintProto {

            /** AutomatonConstraintProto startingState */
            startingState?: (number|Long|null);

            /** AutomatonConstraintProto finalStates */
            finalStates?: ((number|Long)[]|null);

            /** AutomatonConstraintProto transitionTail */
            transitionTail?: ((number|Long)[]|null);

            /** AutomatonConstraintProto transitionHead */
            transitionHead?: ((number|Long)[]|null);

            /** AutomatonConstraintProto transitionLabel */
            transitionLabel?: ((number|Long)[]|null);

            /** AutomatonConstraintProto vars */
            vars?: (number[]|null);

            /** AutomatonConstraintProto exprs */
            exprs?: (operations_research.sat.ILinearExpressionProto[]|null);
        }

        /** Represents an AutomatonConstraintProto. */
        class AutomatonConstraintProto implements IAutomatonConstraintProto {

            /**
             * Constructs a new AutomatonConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IAutomatonConstraintProto);

            /** AutomatonConstraintProto startingState. */
            public startingState: (number|Long);

            /** AutomatonConstraintProto finalStates. */
            public finalStates: (number|Long)[];

            /** AutomatonConstraintProto transitionTail. */
            public transitionTail: (number|Long)[];

            /** AutomatonConstraintProto transitionHead. */
            public transitionHead: (number|Long)[];

            /** AutomatonConstraintProto transitionLabel. */
            public transitionLabel: (number|Long)[];

            /** AutomatonConstraintProto vars. */
            public vars: number[];

            /** AutomatonConstraintProto exprs. */
            public exprs: operations_research.sat.ILinearExpressionProto[];

            /**
             * Creates a new AutomatonConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AutomatonConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IAutomatonConstraintProto): operations_research.sat.AutomatonConstraintProto;

            /**
             * Encodes the specified AutomatonConstraintProto message. Does not implicitly {@link operations_research.sat.AutomatonConstraintProto.verify|verify} messages.
             * @param message AutomatonConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IAutomatonConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AutomatonConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.AutomatonConstraintProto.verify|verify} messages.
             * @param message AutomatonConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IAutomatonConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AutomatonConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AutomatonConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.AutomatonConstraintProto;

            /**
             * Decodes an AutomatonConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AutomatonConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.AutomatonConstraintProto;

            /**
             * Verifies an AutomatonConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AutomatonConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AutomatonConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.AutomatonConstraintProto;

            /**
             * Creates a plain object from an AutomatonConstraintProto message. Also converts values to other types if specified.
             * @param message AutomatonConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.AutomatonConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AutomatonConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AutomatonConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListOfVariablesProto. */
        interface IListOfVariablesProto {

            /** ListOfVariablesProto vars */
            vars?: (number[]|null);
        }

        /** Represents a ListOfVariablesProto. */
        class ListOfVariablesProto implements IListOfVariablesProto {

            /**
             * Constructs a new ListOfVariablesProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IListOfVariablesProto);

            /** ListOfVariablesProto vars. */
            public vars: number[];

            /**
             * Creates a new ListOfVariablesProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOfVariablesProto instance
             */
            public static create(properties?: operations_research.sat.IListOfVariablesProto): operations_research.sat.ListOfVariablesProto;

            /**
             * Encodes the specified ListOfVariablesProto message. Does not implicitly {@link operations_research.sat.ListOfVariablesProto.verify|verify} messages.
             * @param message ListOfVariablesProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IListOfVariablesProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOfVariablesProto message, length delimited. Does not implicitly {@link operations_research.sat.ListOfVariablesProto.verify|verify} messages.
             * @param message ListOfVariablesProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IListOfVariablesProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOfVariablesProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOfVariablesProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.ListOfVariablesProto;

            /**
             * Decodes a ListOfVariablesProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOfVariablesProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.ListOfVariablesProto;

            /**
             * Verifies a ListOfVariablesProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOfVariablesProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOfVariablesProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.ListOfVariablesProto;

            /**
             * Creates a plain object from a ListOfVariablesProto message. Also converts values to other types if specified.
             * @param message ListOfVariablesProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.ListOfVariablesProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOfVariablesProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListOfVariablesProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ConstraintProto. */
        interface IConstraintProto {

            /** ConstraintProto name */
            name?: (string|null);

            /** ConstraintProto enforcementLiteral */
            enforcementLiteral?: (number[]|null);

            /** ConstraintProto boolOr */
            boolOr?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto boolAnd */
            boolAnd?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto atMostOne */
            atMostOne?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto exactlyOne */
            exactlyOne?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto boolXor */
            boolXor?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto intDiv */
            intDiv?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto intMod */
            intMod?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto intProd */
            intProd?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto linMax */
            linMax?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto linear */
            linear?: (operations_research.sat.ILinearConstraintProto|null);

            /** ConstraintProto allDiff */
            allDiff?: (operations_research.sat.IAllDifferentConstraintProto|null);

            /** ConstraintProto element */
            element?: (operations_research.sat.IElementConstraintProto|null);

            /** ConstraintProto circuit */
            circuit?: (operations_research.sat.ICircuitConstraintProto|null);

            /** ConstraintProto routes */
            routes?: (operations_research.sat.IRoutesConstraintProto|null);

            /** ConstraintProto table */
            table?: (operations_research.sat.ITableConstraintProto|null);

            /** ConstraintProto automaton */
            automaton?: (operations_research.sat.IAutomatonConstraintProto|null);

            /** ConstraintProto inverse */
            inverse?: (operations_research.sat.IInverseConstraintProto|null);

            /** ConstraintProto reservoir */
            reservoir?: (operations_research.sat.IReservoirConstraintProto|null);

            /** ConstraintProto interval */
            interval?: (operations_research.sat.IIntervalConstraintProto|null);

            /** ConstraintProto noOverlap */
            noOverlap?: (operations_research.sat.INoOverlapConstraintProto|null);

            /** ConstraintProto noOverlap_2d */
            noOverlap_2d?: (operations_research.sat.INoOverlap2DConstraintProto|null);

            /** ConstraintProto cumulative */
            cumulative?: (operations_research.sat.ICumulativeConstraintProto|null);

            /** ConstraintProto dummyConstraint */
            dummyConstraint?: (operations_research.sat.IListOfVariablesProto|null);
        }

        /** Represents a ConstraintProto. */
        class ConstraintProto implements IConstraintProto {

            /**
             * Constructs a new ConstraintProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IConstraintProto);

            /** ConstraintProto name. */
            public name: string;

            /** ConstraintProto enforcementLiteral. */
            public enforcementLiteral: number[];

            /** ConstraintProto boolOr. */
            public boolOr?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto boolAnd. */
            public boolAnd?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto atMostOne. */
            public atMostOne?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto exactlyOne. */
            public exactlyOne?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto boolXor. */
            public boolXor?: (operations_research.sat.IBoolArgumentProto|null);

            /** ConstraintProto intDiv. */
            public intDiv?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto intMod. */
            public intMod?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto intProd. */
            public intProd?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto linMax. */
            public linMax?: (operations_research.sat.ILinearArgumentProto|null);

            /** ConstraintProto linear. */
            public linear?: (operations_research.sat.ILinearConstraintProto|null);

            /** ConstraintProto allDiff. */
            public allDiff?: (operations_research.sat.IAllDifferentConstraintProto|null);

            /** ConstraintProto element. */
            public element?: (operations_research.sat.IElementConstraintProto|null);

            /** ConstraintProto circuit. */
            public circuit?: (operations_research.sat.ICircuitConstraintProto|null);

            /** ConstraintProto routes. */
            public routes?: (operations_research.sat.IRoutesConstraintProto|null);

            /** ConstraintProto table. */
            public table?: (operations_research.sat.ITableConstraintProto|null);

            /** ConstraintProto automaton. */
            public automaton?: (operations_research.sat.IAutomatonConstraintProto|null);

            /** ConstraintProto inverse. */
            public inverse?: (operations_research.sat.IInverseConstraintProto|null);

            /** ConstraintProto reservoir. */
            public reservoir?: (operations_research.sat.IReservoirConstraintProto|null);

            /** ConstraintProto interval. */
            public interval?: (operations_research.sat.IIntervalConstraintProto|null);

            /** ConstraintProto noOverlap. */
            public noOverlap?: (operations_research.sat.INoOverlapConstraintProto|null);

            /** ConstraintProto noOverlap_2d. */
            public noOverlap_2d?: (operations_research.sat.INoOverlap2DConstraintProto|null);

            /** ConstraintProto cumulative. */
            public cumulative?: (operations_research.sat.ICumulativeConstraintProto|null);

            /** ConstraintProto dummyConstraint. */
            public dummyConstraint?: (operations_research.sat.IListOfVariablesProto|null);

            /** ConstraintProto constraint. */
            public constraint?: ("boolOr"|"boolAnd"|"atMostOne"|"exactlyOne"|"boolXor"|"intDiv"|"intMod"|"intProd"|"linMax"|"linear"|"allDiff"|"element"|"circuit"|"routes"|"table"|"automaton"|"inverse"|"reservoir"|"interval"|"noOverlap"|"noOverlap_2d"|"cumulative"|"dummyConstraint");

            /**
             * Creates a new ConstraintProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConstraintProto instance
             */
            public static create(properties?: operations_research.sat.IConstraintProto): operations_research.sat.ConstraintProto;

            /**
             * Encodes the specified ConstraintProto message. Does not implicitly {@link operations_research.sat.ConstraintProto.verify|verify} messages.
             * @param message ConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConstraintProto message, length delimited. Does not implicitly {@link operations_research.sat.ConstraintProto.verify|verify} messages.
             * @param message ConstraintProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IConstraintProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConstraintProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.ConstraintProto;

            /**
             * Decodes a ConstraintProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConstraintProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.ConstraintProto;

            /**
             * Verifies a ConstraintProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConstraintProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConstraintProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.ConstraintProto;

            /**
             * Creates a plain object from a ConstraintProto message. Also converts values to other types if specified.
             * @param message ConstraintProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.ConstraintProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConstraintProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConstraintProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CpObjectiveProto. */
        interface ICpObjectiveProto {

            /** CpObjectiveProto vars */
            vars?: (number[]|null);

            /** CpObjectiveProto coeffs */
            coeffs?: ((number|Long)[]|null);

            /** CpObjectiveProto offset */
            offset?: (number|null);

            /** CpObjectiveProto scalingFactor */
            scalingFactor?: (number|null);

            /** CpObjectiveProto domain */
            domain?: ((number|Long)[]|null);

            /** CpObjectiveProto scalingWasExact */
            scalingWasExact?: (boolean|null);

            /** CpObjectiveProto integerBeforeOffset */
            integerBeforeOffset?: (number|Long|null);

            /** CpObjectiveProto integerAfterOffset */
            integerAfterOffset?: (number|Long|null);

            /** CpObjectiveProto integerScalingFactor */
            integerScalingFactor?: (number|Long|null);
        }

        /** Represents a CpObjectiveProto. */
        class CpObjectiveProto implements ICpObjectiveProto {

            /**
             * Constructs a new CpObjectiveProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ICpObjectiveProto);

            /** CpObjectiveProto vars. */
            public vars: number[];

            /** CpObjectiveProto coeffs. */
            public coeffs: (number|Long)[];

            /** CpObjectiveProto offset. */
            public offset: number;

            /** CpObjectiveProto scalingFactor. */
            public scalingFactor: number;

            /** CpObjectiveProto domain. */
            public domain: (number|Long)[];

            /** CpObjectiveProto scalingWasExact. */
            public scalingWasExact: boolean;

            /** CpObjectiveProto integerBeforeOffset. */
            public integerBeforeOffset: (number|Long);

            /** CpObjectiveProto integerAfterOffset. */
            public integerAfterOffset: (number|Long);

            /** CpObjectiveProto integerScalingFactor. */
            public integerScalingFactor: (number|Long);

            /**
             * Creates a new CpObjectiveProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CpObjectiveProto instance
             */
            public static create(properties?: operations_research.sat.ICpObjectiveProto): operations_research.sat.CpObjectiveProto;

            /**
             * Encodes the specified CpObjectiveProto message. Does not implicitly {@link operations_research.sat.CpObjectiveProto.verify|verify} messages.
             * @param message CpObjectiveProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ICpObjectiveProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CpObjectiveProto message, length delimited. Does not implicitly {@link operations_research.sat.CpObjectiveProto.verify|verify} messages.
             * @param message CpObjectiveProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ICpObjectiveProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CpObjectiveProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CpObjectiveProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.CpObjectiveProto;

            /**
             * Decodes a CpObjectiveProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CpObjectiveProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.CpObjectiveProto;

            /**
             * Verifies a CpObjectiveProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CpObjectiveProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CpObjectiveProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.CpObjectiveProto;

            /**
             * Creates a plain object from a CpObjectiveProto message. Also converts values to other types if specified.
             * @param message CpObjectiveProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.CpObjectiveProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CpObjectiveProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CpObjectiveProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatObjectiveProto. */
        interface IFloatObjectiveProto {

            /** FloatObjectiveProto vars */
            vars?: (number[]|null);

            /** FloatObjectiveProto coeffs */
            coeffs?: (number[]|null);

            /** FloatObjectiveProto offset */
            offset?: (number|null);

            /** FloatObjectiveProto maximize */
            maximize?: (boolean|null);
        }

        /** Represents a FloatObjectiveProto. */
        class FloatObjectiveProto implements IFloatObjectiveProto {

            /**
             * Constructs a new FloatObjectiveProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IFloatObjectiveProto);

            /** FloatObjectiveProto vars. */
            public vars: number[];

            /** FloatObjectiveProto coeffs. */
            public coeffs: number[];

            /** FloatObjectiveProto offset. */
            public offset: number;

            /** FloatObjectiveProto maximize. */
            public maximize: boolean;

            /**
             * Creates a new FloatObjectiveProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatObjectiveProto instance
             */
            public static create(properties?: operations_research.sat.IFloatObjectiveProto): operations_research.sat.FloatObjectiveProto;

            /**
             * Encodes the specified FloatObjectiveProto message. Does not implicitly {@link operations_research.sat.FloatObjectiveProto.verify|verify} messages.
             * @param message FloatObjectiveProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IFloatObjectiveProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatObjectiveProto message, length delimited. Does not implicitly {@link operations_research.sat.FloatObjectiveProto.verify|verify} messages.
             * @param message FloatObjectiveProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IFloatObjectiveProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatObjectiveProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatObjectiveProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.FloatObjectiveProto;

            /**
             * Decodes a FloatObjectiveProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatObjectiveProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.FloatObjectiveProto;

            /**
             * Verifies a FloatObjectiveProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatObjectiveProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatObjectiveProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.FloatObjectiveProto;

            /**
             * Creates a plain object from a FloatObjectiveProto message. Also converts values to other types if specified.
             * @param message FloatObjectiveProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.FloatObjectiveProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatObjectiveProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatObjectiveProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DecisionStrategyProto. */
        interface IDecisionStrategyProto {

            /** DecisionStrategyProto variables */
            variables?: (number[]|null);

            /** DecisionStrategyProto exprs */
            exprs?: (operations_research.sat.ILinearExpressionProto[]|null);

            /** DecisionStrategyProto variableSelectionStrategy */
            variableSelectionStrategy?: (operations_research.sat.DecisionStrategyProto.VariableSelectionStrategy|null);

            /** DecisionStrategyProto domainReductionStrategy */
            domainReductionStrategy?: (operations_research.sat.DecisionStrategyProto.DomainReductionStrategy|null);
        }

        /** Represents a DecisionStrategyProto. */
        class DecisionStrategyProto implements IDecisionStrategyProto {

            /**
             * Constructs a new DecisionStrategyProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IDecisionStrategyProto);

            /** DecisionStrategyProto variables. */
            public variables: number[];

            /** DecisionStrategyProto exprs. */
            public exprs: operations_research.sat.ILinearExpressionProto[];

            /** DecisionStrategyProto variableSelectionStrategy. */
            public variableSelectionStrategy: operations_research.sat.DecisionStrategyProto.VariableSelectionStrategy;

            /** DecisionStrategyProto domainReductionStrategy. */
            public domainReductionStrategy: operations_research.sat.DecisionStrategyProto.DomainReductionStrategy;

            /**
             * Creates a new DecisionStrategyProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DecisionStrategyProto instance
             */
            public static create(properties?: operations_research.sat.IDecisionStrategyProto): operations_research.sat.DecisionStrategyProto;

            /**
             * Encodes the specified DecisionStrategyProto message. Does not implicitly {@link operations_research.sat.DecisionStrategyProto.verify|verify} messages.
             * @param message DecisionStrategyProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IDecisionStrategyProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DecisionStrategyProto message, length delimited. Does not implicitly {@link operations_research.sat.DecisionStrategyProto.verify|verify} messages.
             * @param message DecisionStrategyProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IDecisionStrategyProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DecisionStrategyProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DecisionStrategyProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.DecisionStrategyProto;

            /**
             * Decodes a DecisionStrategyProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DecisionStrategyProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.DecisionStrategyProto;

            /**
             * Verifies a DecisionStrategyProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DecisionStrategyProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DecisionStrategyProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.DecisionStrategyProto;

            /**
             * Creates a plain object from a DecisionStrategyProto message. Also converts values to other types if specified.
             * @param message DecisionStrategyProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.DecisionStrategyProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DecisionStrategyProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DecisionStrategyProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DecisionStrategyProto {

            /** VariableSelectionStrategy enum. */
            enum VariableSelectionStrategy {
                CHOOSE_FIRST = 0,
                CHOOSE_LOWEST_MIN = 1,
                CHOOSE_HIGHEST_MAX = 2,
                CHOOSE_MIN_DOMAIN_SIZE = 3,
                CHOOSE_MAX_DOMAIN_SIZE = 4
            }

            /** DomainReductionStrategy enum. */
            enum DomainReductionStrategy {
                SELECT_MIN_VALUE = 0,
                SELECT_MAX_VALUE = 1,
                SELECT_LOWER_HALF = 2,
                SELECT_UPPER_HALF = 3,
                SELECT_MEDIAN_VALUE = 4,
                SELECT_RANDOM_HALF = 5
            }
        }

        /** Properties of a PartialVariableAssignment. */
        interface IPartialVariableAssignment {

            /** PartialVariableAssignment vars */
            vars?: (number[]|null);

            /** PartialVariableAssignment values */
            values?: ((number|Long)[]|null);
        }

        /** Represents a PartialVariableAssignment. */
        class PartialVariableAssignment implements IPartialVariableAssignment {

            /**
             * Constructs a new PartialVariableAssignment.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IPartialVariableAssignment);

            /** PartialVariableAssignment vars. */
            public vars: number[];

            /** PartialVariableAssignment values. */
            public values: (number|Long)[];

            /**
             * Creates a new PartialVariableAssignment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PartialVariableAssignment instance
             */
            public static create(properties?: operations_research.sat.IPartialVariableAssignment): operations_research.sat.PartialVariableAssignment;

            /**
             * Encodes the specified PartialVariableAssignment message. Does not implicitly {@link operations_research.sat.PartialVariableAssignment.verify|verify} messages.
             * @param message PartialVariableAssignment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IPartialVariableAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PartialVariableAssignment message, length delimited. Does not implicitly {@link operations_research.sat.PartialVariableAssignment.verify|verify} messages.
             * @param message PartialVariableAssignment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IPartialVariableAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PartialVariableAssignment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PartialVariableAssignment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.PartialVariableAssignment;

            /**
             * Decodes a PartialVariableAssignment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PartialVariableAssignment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.PartialVariableAssignment;

            /**
             * Verifies a PartialVariableAssignment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PartialVariableAssignment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PartialVariableAssignment
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.PartialVariableAssignment;

            /**
             * Creates a plain object from a PartialVariableAssignment message. Also converts values to other types if specified.
             * @param message PartialVariableAssignment
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.PartialVariableAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PartialVariableAssignment to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PartialVariableAssignment
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SparsePermutationProto. */
        interface ISparsePermutationProto {

            /** SparsePermutationProto support */
            support?: (number[]|null);

            /** SparsePermutationProto cycleSizes */
            cycleSizes?: (number[]|null);
        }

        /** Represents a SparsePermutationProto. */
        class SparsePermutationProto implements ISparsePermutationProto {

            /**
             * Constructs a new SparsePermutationProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ISparsePermutationProto);

            /** SparsePermutationProto support. */
            public support: number[];

            /** SparsePermutationProto cycleSizes. */
            public cycleSizes: number[];

            /**
             * Creates a new SparsePermutationProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SparsePermutationProto instance
             */
            public static create(properties?: operations_research.sat.ISparsePermutationProto): operations_research.sat.SparsePermutationProto;

            /**
             * Encodes the specified SparsePermutationProto message. Does not implicitly {@link operations_research.sat.SparsePermutationProto.verify|verify} messages.
             * @param message SparsePermutationProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ISparsePermutationProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SparsePermutationProto message, length delimited. Does not implicitly {@link operations_research.sat.SparsePermutationProto.verify|verify} messages.
             * @param message SparsePermutationProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ISparsePermutationProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SparsePermutationProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SparsePermutationProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.SparsePermutationProto;

            /**
             * Decodes a SparsePermutationProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SparsePermutationProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.SparsePermutationProto;

            /**
             * Verifies a SparsePermutationProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SparsePermutationProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SparsePermutationProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.SparsePermutationProto;

            /**
             * Creates a plain object from a SparsePermutationProto message. Also converts values to other types if specified.
             * @param message SparsePermutationProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.SparsePermutationProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SparsePermutationProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SparsePermutationProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DenseMatrixProto. */
        interface IDenseMatrixProto {

            /** DenseMatrixProto numRows */
            numRows?: (number|null);

            /** DenseMatrixProto numCols */
            numCols?: (number|null);

            /** DenseMatrixProto entries */
            entries?: (number[]|null);
        }

        /** Represents a DenseMatrixProto. */
        class DenseMatrixProto implements IDenseMatrixProto {

            /**
             * Constructs a new DenseMatrixProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.IDenseMatrixProto);

            /** DenseMatrixProto numRows. */
            public numRows: number;

            /** DenseMatrixProto numCols. */
            public numCols: number;

            /** DenseMatrixProto entries. */
            public entries: number[];

            /**
             * Creates a new DenseMatrixProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DenseMatrixProto instance
             */
            public static create(properties?: operations_research.sat.IDenseMatrixProto): operations_research.sat.DenseMatrixProto;

            /**
             * Encodes the specified DenseMatrixProto message. Does not implicitly {@link operations_research.sat.DenseMatrixProto.verify|verify} messages.
             * @param message DenseMatrixProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.IDenseMatrixProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DenseMatrixProto message, length delimited. Does not implicitly {@link operations_research.sat.DenseMatrixProto.verify|verify} messages.
             * @param message DenseMatrixProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.IDenseMatrixProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DenseMatrixProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DenseMatrixProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.DenseMatrixProto;

            /**
             * Decodes a DenseMatrixProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DenseMatrixProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.DenseMatrixProto;

            /**
             * Verifies a DenseMatrixProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DenseMatrixProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DenseMatrixProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.DenseMatrixProto;

            /**
             * Creates a plain object from a DenseMatrixProto message. Also converts values to other types if specified.
             * @param message DenseMatrixProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.DenseMatrixProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DenseMatrixProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DenseMatrixProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SymmetryProto. */
        interface ISymmetryProto {

            /** SymmetryProto permutations */
            permutations?: (operations_research.sat.ISparsePermutationProto[]|null);

            /** SymmetryProto orbitopes */
            orbitopes?: (operations_research.sat.IDenseMatrixProto[]|null);
        }

        /** Represents a SymmetryProto. */
        class SymmetryProto implements ISymmetryProto {

            /**
             * Constructs a new SymmetryProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ISymmetryProto);

            /** SymmetryProto permutations. */
            public permutations: operations_research.sat.ISparsePermutationProto[];

            /** SymmetryProto orbitopes. */
            public orbitopes: operations_research.sat.IDenseMatrixProto[];

            /**
             * Creates a new SymmetryProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SymmetryProto instance
             */
            public static create(properties?: operations_research.sat.ISymmetryProto): operations_research.sat.SymmetryProto;

            /**
             * Encodes the specified SymmetryProto message. Does not implicitly {@link operations_research.sat.SymmetryProto.verify|verify} messages.
             * @param message SymmetryProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ISymmetryProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SymmetryProto message, length delimited. Does not implicitly {@link operations_research.sat.SymmetryProto.verify|verify} messages.
             * @param message SymmetryProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ISymmetryProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SymmetryProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SymmetryProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.SymmetryProto;

            /**
             * Decodes a SymmetryProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SymmetryProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.SymmetryProto;

            /**
             * Verifies a SymmetryProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SymmetryProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SymmetryProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.SymmetryProto;

            /**
             * Creates a plain object from a SymmetryProto message. Also converts values to other types if specified.
             * @param message SymmetryProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.SymmetryProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SymmetryProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SymmetryProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CpModelProto. */
        interface ICpModelProto {

            /** CpModelProto name */
            name?: (string|null);

            /** CpModelProto variables */
            variables?: (operations_research.sat.IIntegerVariableProto[]|null);

            /** CpModelProto constraints */
            constraints?: (operations_research.sat.IConstraintProto[]|null);

            /** CpModelProto objective */
            objective?: (operations_research.sat.ICpObjectiveProto|null);

            /** CpModelProto floatingPointObjective */
            floatingPointObjective?: (operations_research.sat.IFloatObjectiveProto|null);

            /** CpModelProto searchStrategy */
            searchStrategy?: (operations_research.sat.IDecisionStrategyProto[]|null);

            /** CpModelProto solutionHint */
            solutionHint?: (operations_research.sat.IPartialVariableAssignment|null);

            /** CpModelProto assumptions */
            assumptions?: (number[]|null);

            /** CpModelProto symmetry */
            symmetry?: (operations_research.sat.ISymmetryProto|null);
        }

        /** Represents a CpModelProto. */
        class CpModelProto implements ICpModelProto {

            /**
             * Constructs a new CpModelProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ICpModelProto);

            /** CpModelProto name. */
            public name: string;

            /** CpModelProto variables. */
            public variables: operations_research.sat.IIntegerVariableProto[];

            /** CpModelProto constraints. */
            public constraints: operations_research.sat.IConstraintProto[];

            /** CpModelProto objective. */
            public objective?: (operations_research.sat.ICpObjectiveProto|null);

            /** CpModelProto floatingPointObjective. */
            public floatingPointObjective?: (operations_research.sat.IFloatObjectiveProto|null);

            /** CpModelProto searchStrategy. */
            public searchStrategy: operations_research.sat.IDecisionStrategyProto[];

            /** CpModelProto solutionHint. */
            public solutionHint?: (operations_research.sat.IPartialVariableAssignment|null);

            /** CpModelProto assumptions. */
            public assumptions: number[];

            /** CpModelProto symmetry. */
            public symmetry?: (operations_research.sat.ISymmetryProto|null);

            /**
             * Creates a new CpModelProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CpModelProto instance
             */
            public static create(properties?: operations_research.sat.ICpModelProto): operations_research.sat.CpModelProto;

            /**
             * Encodes the specified CpModelProto message. Does not implicitly {@link operations_research.sat.CpModelProto.verify|verify} messages.
             * @param message CpModelProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ICpModelProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CpModelProto message, length delimited. Does not implicitly {@link operations_research.sat.CpModelProto.verify|verify} messages.
             * @param message CpModelProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ICpModelProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CpModelProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CpModelProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.CpModelProto;

            /**
             * Decodes a CpModelProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CpModelProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.CpModelProto;

            /**
             * Verifies a CpModelProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CpModelProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CpModelProto
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.CpModelProto;

            /**
             * Creates a plain object from a CpModelProto message. Also converts values to other types if specified.
             * @param message CpModelProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.CpModelProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CpModelProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CpModelProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** CpSolverStatus enum. */
        enum CpSolverStatus {
            UNKNOWN = 0,
            MODEL_INVALID = 1,
            FEASIBLE = 2,
            INFEASIBLE = 3,
            OPTIMAL = 4
        }

        /** Properties of a CpSolverSolution. */
        interface ICpSolverSolution {

            /** CpSolverSolution values */
            values?: ((number|Long)[]|null);
        }

        /** Represents a CpSolverSolution. */
        class CpSolverSolution implements ICpSolverSolution {

            /**
             * Constructs a new CpSolverSolution.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ICpSolverSolution);

            /** CpSolverSolution values. */
            public values: (number|Long)[];

            /**
             * Creates a new CpSolverSolution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CpSolverSolution instance
             */
            public static create(properties?: operations_research.sat.ICpSolverSolution): operations_research.sat.CpSolverSolution;

            /**
             * Encodes the specified CpSolverSolution message. Does not implicitly {@link operations_research.sat.CpSolverSolution.verify|verify} messages.
             * @param message CpSolverSolution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ICpSolverSolution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CpSolverSolution message, length delimited. Does not implicitly {@link operations_research.sat.CpSolverSolution.verify|verify} messages.
             * @param message CpSolverSolution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ICpSolverSolution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CpSolverSolution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CpSolverSolution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.CpSolverSolution;

            /**
             * Decodes a CpSolverSolution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CpSolverSolution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.CpSolverSolution;

            /**
             * Verifies a CpSolverSolution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CpSolverSolution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CpSolverSolution
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.CpSolverSolution;

            /**
             * Creates a plain object from a CpSolverSolution message. Also converts values to other types if specified.
             * @param message CpSolverSolution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.CpSolverSolution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CpSolverSolution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CpSolverSolution
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CpSolverResponse. */
        interface ICpSolverResponse {

            /** CpSolverResponse status */
            status?: (operations_research.sat.CpSolverStatus|null);

            /** CpSolverResponse solution */
            solution?: ((number|Long)[]|null);

            /** CpSolverResponse objectiveValue */
            objectiveValue?: (number|null);

            /** CpSolverResponse bestObjectiveBound */
            bestObjectiveBound?: (number|null);

            /** CpSolverResponse additionalSolutions */
            additionalSolutions?: (operations_research.sat.ICpSolverSolution[]|null);

            /** CpSolverResponse tightenedVariables */
            tightenedVariables?: (operations_research.sat.IIntegerVariableProto[]|null);

            /** CpSolverResponse sufficientAssumptionsForInfeasibility */
            sufficientAssumptionsForInfeasibility?: (number[]|null);

            /** CpSolverResponse integerObjective */
            integerObjective?: (operations_research.sat.ICpObjectiveProto|null);

            /** CpSolverResponse innerObjectiveLowerBound */
            innerObjectiveLowerBound?: (number|Long|null);

            /** CpSolverResponse numIntegers */
            numIntegers?: (number|Long|null);

            /** CpSolverResponse numBooleans */
            numBooleans?: (number|Long|null);

            /** CpSolverResponse numFixedBooleans */
            numFixedBooleans?: (number|Long|null);

            /** CpSolverResponse numConflicts */
            numConflicts?: (number|Long|null);

            /** CpSolverResponse numBranches */
            numBranches?: (number|Long|null);

            /** CpSolverResponse numBinaryPropagations */
            numBinaryPropagations?: (number|Long|null);

            /** CpSolverResponse numIntegerPropagations */
            numIntegerPropagations?: (number|Long|null);

            /** CpSolverResponse numRestarts */
            numRestarts?: (number|Long|null);

            /** CpSolverResponse numLpIterations */
            numLpIterations?: (number|Long|null);

            /** CpSolverResponse wallTime */
            wallTime?: (number|null);

            /** CpSolverResponse userTime */
            userTime?: (number|null);

            /** CpSolverResponse deterministicTime */
            deterministicTime?: (number|null);

            /** CpSolverResponse gapIntegral */
            gapIntegral?: (number|null);

            /** CpSolverResponse solutionInfo */
            solutionInfo?: (string|null);

            /** CpSolverResponse solveLog */
            solveLog?: (string|null);
        }

        /** Represents a CpSolverResponse. */
        class CpSolverResponse implements ICpSolverResponse {

            /**
             * Constructs a new CpSolverResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ICpSolverResponse);

            /** CpSolverResponse status. */
            public status: operations_research.sat.CpSolverStatus;

            /** CpSolverResponse solution. */
            public solution: (number|Long)[];

            /** CpSolverResponse objectiveValue. */
            public objectiveValue: number;

            /** CpSolverResponse bestObjectiveBound. */
            public bestObjectiveBound: number;

            /** CpSolverResponse additionalSolutions. */
            public additionalSolutions: operations_research.sat.ICpSolverSolution[];

            /** CpSolverResponse tightenedVariables. */
            public tightenedVariables: operations_research.sat.IIntegerVariableProto[];

            /** CpSolverResponse sufficientAssumptionsForInfeasibility. */
            public sufficientAssumptionsForInfeasibility: number[];

            /** CpSolverResponse integerObjective. */
            public integerObjective?: (operations_research.sat.ICpObjectiveProto|null);

            /** CpSolverResponse innerObjectiveLowerBound. */
            public innerObjectiveLowerBound: (number|Long);

            /** CpSolverResponse numIntegers. */
            public numIntegers: (number|Long);

            /** CpSolverResponse numBooleans. */
            public numBooleans: (number|Long);

            /** CpSolverResponse numFixedBooleans. */
            public numFixedBooleans: (number|Long);

            /** CpSolverResponse numConflicts. */
            public numConflicts: (number|Long);

            /** CpSolverResponse numBranches. */
            public numBranches: (number|Long);

            /** CpSolverResponse numBinaryPropagations. */
            public numBinaryPropagations: (number|Long);

            /** CpSolverResponse numIntegerPropagations. */
            public numIntegerPropagations: (number|Long);

            /** CpSolverResponse numRestarts. */
            public numRestarts: (number|Long);

            /** CpSolverResponse numLpIterations. */
            public numLpIterations: (number|Long);

            /** CpSolverResponse wallTime. */
            public wallTime: number;

            /** CpSolverResponse userTime. */
            public userTime: number;

            /** CpSolverResponse deterministicTime. */
            public deterministicTime: number;

            /** CpSolverResponse gapIntegral. */
            public gapIntegral: number;

            /** CpSolverResponse solutionInfo. */
            public solutionInfo: string;

            /** CpSolverResponse solveLog. */
            public solveLog: string;

            /**
             * Creates a new CpSolverResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CpSolverResponse instance
             */
            public static create(properties?: operations_research.sat.ICpSolverResponse): operations_research.sat.CpSolverResponse;

            /**
             * Encodes the specified CpSolverResponse message. Does not implicitly {@link operations_research.sat.CpSolverResponse.verify|verify} messages.
             * @param message CpSolverResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ICpSolverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CpSolverResponse message, length delimited. Does not implicitly {@link operations_research.sat.CpSolverResponse.verify|verify} messages.
             * @param message CpSolverResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ICpSolverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CpSolverResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CpSolverResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.CpSolverResponse;

            /**
             * Decodes a CpSolverResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CpSolverResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.CpSolverResponse;

            /**
             * Verifies a CpSolverResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CpSolverResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CpSolverResponse
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.CpSolverResponse;

            /**
             * Creates a plain object from a CpSolverResponse message. Also converts values to other types if specified.
             * @param message CpSolverResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.CpSolverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CpSolverResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CpSolverResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SatParameters. */
        interface ISatParameters {

            /** SatParameters name */
            name?: (string|null);

            /** SatParameters preferredVariableOrder */
            preferredVariableOrder?: (operations_research.sat.SatParameters.VariableOrder|null);

            /** SatParameters initialPolarity */
            initialPolarity?: (operations_research.sat.SatParameters.Polarity|null);

            /** SatParameters usePhaseSaving */
            usePhaseSaving?: (boolean|null);

            /** SatParameters polarityRephaseIncrement */
            polarityRephaseIncrement?: (number|null);

            /** SatParameters polarityExploitLsHints */
            polarityExploitLsHints?: (boolean|null);

            /** SatParameters randomPolarityRatio */
            randomPolarityRatio?: (number|null);

            /** SatParameters randomBranchesRatio */
            randomBranchesRatio?: (number|null);

            /** SatParameters useErwaHeuristic */
            useErwaHeuristic?: (boolean|null);

            /** SatParameters initialVariablesActivity */
            initialVariablesActivity?: (number|null);

            /** SatParameters alsoBumpVariablesInConflictReasons */
            alsoBumpVariablesInConflictReasons?: (boolean|null);

            /** SatParameters minimizationAlgorithm */
            minimizationAlgorithm?: (operations_research.sat.SatParameters.ConflictMinimizationAlgorithm|null);

            /** SatParameters binaryMinimizationAlgorithm */
            binaryMinimizationAlgorithm?: (operations_research.sat.SatParameters.BinaryMinizationAlgorithm|null);

            /** SatParameters subsumptionDuringConflictAnalysis */
            subsumptionDuringConflictAnalysis?: (boolean|null);

            /** SatParameters clauseCleanupPeriod */
            clauseCleanupPeriod?: (number|null);

            /** SatParameters clauseCleanupTarget */
            clauseCleanupTarget?: (number|null);

            /** SatParameters clauseCleanupRatio */
            clauseCleanupRatio?: (number|null);

            /** SatParameters clauseCleanupProtection */
            clauseCleanupProtection?: (operations_research.sat.SatParameters.ClauseProtection|null);

            /** SatParameters clauseCleanupLbdBound */
            clauseCleanupLbdBound?: (number|null);

            /** SatParameters clauseCleanupOrdering */
            clauseCleanupOrdering?: (operations_research.sat.SatParameters.ClauseOrdering|null);

            /** SatParameters pbCleanupIncrement */
            pbCleanupIncrement?: (number|null);

            /** SatParameters pbCleanupRatio */
            pbCleanupRatio?: (number|null);

            /** SatParameters variableActivityDecay */
            variableActivityDecay?: (number|null);

            /** SatParameters maxVariableActivityValue */
            maxVariableActivityValue?: (number|null);

            /** SatParameters glucoseMaxDecay */
            glucoseMaxDecay?: (number|null);

            /** SatParameters glucoseDecayIncrement */
            glucoseDecayIncrement?: (number|null);

            /** SatParameters glucoseDecayIncrementPeriod */
            glucoseDecayIncrementPeriod?: (number|null);

            /** SatParameters clauseActivityDecay */
            clauseActivityDecay?: (number|null);

            /** SatParameters maxClauseActivityValue */
            maxClauseActivityValue?: (number|null);

            /** SatParameters restartAlgorithms */
            restartAlgorithms?: (operations_research.sat.SatParameters.RestartAlgorithm[]|null);

            /** SatParameters defaultRestartAlgorithms */
            defaultRestartAlgorithms?: (string|null);

            /** SatParameters restartPeriod */
            restartPeriod?: (number|null);

            /** SatParameters restartRunningWindowSize */
            restartRunningWindowSize?: (number|null);

            /** SatParameters restartDlAverageRatio */
            restartDlAverageRatio?: (number|null);

            /** SatParameters restartLbdAverageRatio */
            restartLbdAverageRatio?: (number|null);

            /** SatParameters useBlockingRestart */
            useBlockingRestart?: (boolean|null);

            /** SatParameters blockingRestartWindowSize */
            blockingRestartWindowSize?: (number|null);

            /** SatParameters blockingRestartMultiplier */
            blockingRestartMultiplier?: (number|null);

            /** SatParameters numConflictsBeforeStrategyChanges */
            numConflictsBeforeStrategyChanges?: (number|null);

            /** SatParameters strategyChangeIncreaseRatio */
            strategyChangeIncreaseRatio?: (number|null);

            /** SatParameters maxTimeInSeconds */
            maxTimeInSeconds?: (number|null);

            /** SatParameters maxDeterministicTime */
            maxDeterministicTime?: (number|null);

            /** SatParameters maxNumDeterministicBatches */
            maxNumDeterministicBatches?: (number|null);

            /** SatParameters maxNumberOfConflicts */
            maxNumberOfConflicts?: (number|Long|null);

            /** SatParameters maxMemoryInMb */
            maxMemoryInMb?: (number|Long|null);

            /** SatParameters absoluteGapLimit */
            absoluteGapLimit?: (number|null);

            /** SatParameters relativeGapLimit */
            relativeGapLimit?: (number|null);

            /** SatParameters randomSeed */
            randomSeed?: (number|null);

            /** SatParameters permuteVariableRandomly */
            permuteVariableRandomly?: (boolean|null);

            /** SatParameters permutePresolveConstraintOrder */
            permutePresolveConstraintOrder?: (boolean|null);

            /** SatParameters useAbslRandom */
            useAbslRandom?: (boolean|null);

            /** SatParameters logSearchProgress */
            logSearchProgress?: (boolean|null);

            /** SatParameters logSubsolverStatistics */
            logSubsolverStatistics?: (boolean|null);

            /** SatParameters logPrefix */
            logPrefix?: (string|null);

            /** SatParameters logToStdout */
            logToStdout?: (boolean|null);

            /** SatParameters logToResponse */
            logToResponse?: (boolean|null);

            /** SatParameters usePbResolution */
            usePbResolution?: (boolean|null);

            /** SatParameters minimizeReductionDuringPbResolution */
            minimizeReductionDuringPbResolution?: (boolean|null);

            /** SatParameters countAssumptionLevelsInLbd */
            countAssumptionLevelsInLbd?: (boolean|null);

            /** SatParameters presolveBveThreshold */
            presolveBveThreshold?: (number|null);

            /** SatParameters filterSatPostsolveClauses */
            filterSatPostsolveClauses?: (boolean|null);

            /** SatParameters presolveBveClauseWeight */
            presolveBveClauseWeight?: (number|null);

            /** SatParameters probingDeterministicTimeLimit */
            probingDeterministicTimeLimit?: (number|null);

            /** SatParameters presolveProbingDeterministicTimeLimit */
            presolveProbingDeterministicTimeLimit?: (number|null);

            /** SatParameters presolveBlockedClause */
            presolveBlockedClause?: (boolean|null);

            /** SatParameters presolveUseBva */
            presolveUseBva?: (boolean|null);

            /** SatParameters presolveBvaThreshold */
            presolveBvaThreshold?: (number|null);

            /** SatParameters maxPresolveIterations */
            maxPresolveIterations?: (number|null);

            /** SatParameters cpModelPresolve */
            cpModelPresolve?: (boolean|null);

            /** SatParameters cpModelProbingLevel */
            cpModelProbingLevel?: (number|null);

            /** SatParameters cpModelUseSatPresolve */
            cpModelUseSatPresolve?: (boolean|null);

            /** SatParameters removeFixedVariablesEarly */
            removeFixedVariablesEarly?: (boolean|null);

            /** SatParameters detectTableWithCost */
            detectTableWithCost?: (boolean|null);

            /** SatParameters tableCompressionLevel */
            tableCompressionLevel?: (number|null);

            /** SatParameters expandAlldiffConstraints */
            expandAlldiffConstraints?: (boolean|null);

            /** SatParameters maxAlldiffDomainSize */
            maxAlldiffDomainSize?: (number|null);

            /** SatParameters expandReservoirConstraints */
            expandReservoirConstraints?: (boolean|null);

            /** SatParameters expandReservoirUsingCircuit */
            expandReservoirUsingCircuit?: (boolean|null);

            /** SatParameters encodeCumulativeAsReservoir */
            encodeCumulativeAsReservoir?: (boolean|null);

            /** SatParameters maxLinMaxSizeForExpansion */
            maxLinMaxSizeForExpansion?: (number|null);

            /** SatParameters disableConstraintExpansion */
            disableConstraintExpansion?: (boolean|null);

            /** SatParameters encodeComplexLinearConstraintWithInteger */
            encodeComplexLinearConstraintWithInteger?: (boolean|null);

            /** SatParameters mergeNoOverlapWorkLimit */
            mergeNoOverlapWorkLimit?: (number|null);

            /** SatParameters mergeAtMostOneWorkLimit */
            mergeAtMostOneWorkLimit?: (number|null);

            /** SatParameters presolveSubstitutionLevel */
            presolveSubstitutionLevel?: (number|null);

            /** SatParameters presolveExtractIntegerEnforcement */
            presolveExtractIntegerEnforcement?: (boolean|null);

            /** SatParameters presolveInclusionWorkLimit */
            presolveInclusionWorkLimit?: (number|Long|null);

            /** SatParameters ignoreNames */
            ignoreNames?: (boolean|null);

            /** SatParameters inferAllDiffs */
            inferAllDiffs?: (boolean|null);

            /** SatParameters findBigLinearOverlap */
            findBigLinearOverlap?: (boolean|null);

            /** SatParameters useSatInprocessing */
            useSatInprocessing?: (boolean|null);

            /** SatParameters inprocessingDtimeRatio */
            inprocessingDtimeRatio?: (number|null);

            /** SatParameters inprocessingProbingDtime */
            inprocessingProbingDtime?: (number|null);

            /** SatParameters inprocessingMinimizationDtime */
            inprocessingMinimizationDtime?: (number|null);

            /** SatParameters inprocessingMinimizationUseConflictAnalysis */
            inprocessingMinimizationUseConflictAnalysis?: (boolean|null);

            /** SatParameters inprocessingMinimizationUseAllOrderings */
            inprocessingMinimizationUseAllOrderings?: (boolean|null);

            /** SatParameters numWorkers */
            numWorkers?: (number|null);

            /** SatParameters numSearchWorkers */
            numSearchWorkers?: (number|null);

            /** SatParameters numFullSubsolvers */
            numFullSubsolvers?: (number|null);

            /** SatParameters subsolvers */
            subsolvers?: (string[]|null);

            /** SatParameters extraSubsolvers */
            extraSubsolvers?: (string[]|null);

            /** SatParameters ignoreSubsolvers */
            ignoreSubsolvers?: (string[]|null);

            /** SatParameters filterSubsolvers */
            filterSubsolvers?: (string[]|null);

            /** SatParameters subsolverParams */
            subsolverParams?: (operations_research.sat.ISatParameters[]|null);

            /** SatParameters interleaveSearch */
            interleaveSearch?: (boolean|null);

            /** SatParameters interleaveBatchSize */
            interleaveBatchSize?: (number|null);

            /** SatParameters shareObjectiveBounds */
            shareObjectiveBounds?: (boolean|null);

            /** SatParameters shareLevelZeroBounds */
            shareLevelZeroBounds?: (boolean|null);

            /** SatParameters shareBinaryClauses */
            shareBinaryClauses?: (boolean|null);

            /** SatParameters shareGlueClauses */
            shareGlueClauses?: (boolean|null);

            /** SatParameters minimizeSharedClauses */
            minimizeSharedClauses?: (boolean|null);

            /** SatParameters shareGlueClausesDtime */
            shareGlueClausesDtime?: (number|null);

            /** SatParameters debugPostsolveWithFullSolver */
            debugPostsolveWithFullSolver?: (boolean|null);

            /** SatParameters debugMaxNumPresolveOperations */
            debugMaxNumPresolveOperations?: (number|null);

            /** SatParameters debugCrashOnBadHint */
            debugCrashOnBadHint?: (boolean|null);

            /** SatParameters debugCrashIfPresolveBreaksHint */
            debugCrashIfPresolveBreaksHint?: (boolean|null);

            /** SatParameters useOptimizationHints */
            useOptimizationHints?: (boolean|null);

            /** SatParameters coreMinimizationLevel */
            coreMinimizationLevel?: (number|null);

            /** SatParameters findMultipleCores */
            findMultipleCores?: (boolean|null);

            /** SatParameters coverOptimization */
            coverOptimization?: (boolean|null);

            /** SatParameters maxSatAssumptionOrder */
            maxSatAssumptionOrder?: (operations_research.sat.SatParameters.MaxSatAssumptionOrder|null);

            /** SatParameters maxSatReverseAssumptionOrder */
            maxSatReverseAssumptionOrder?: (boolean|null);

            /** SatParameters maxSatStratification */
            maxSatStratification?: (operations_research.sat.SatParameters.MaxSatStratificationAlgorithm|null);

            /** SatParameters propagationLoopDetectionFactor */
            propagationLoopDetectionFactor?: (number|null);

            /** SatParameters usePrecedencesInDisjunctiveConstraint */
            usePrecedencesInDisjunctiveConstraint?: (boolean|null);

            /** SatParameters maxSizeToCreatePrecedenceLiteralsInDisjunctive */
            maxSizeToCreatePrecedenceLiteralsInDisjunctive?: (number|null);

            /** SatParameters useStrongPropagationInDisjunctive */
            useStrongPropagationInDisjunctive?: (boolean|null);

            /** SatParameters useDynamicPrecedenceInDisjunctive */
            useDynamicPrecedenceInDisjunctive?: (boolean|null);

            /** SatParameters useDynamicPrecedenceInCumulative */
            useDynamicPrecedenceInCumulative?: (boolean|null);

            /** SatParameters useOverloadCheckerInCumulative */
            useOverloadCheckerInCumulative?: (boolean|null);

            /** SatParameters useConservativeScaleOverloadChecker */
            useConservativeScaleOverloadChecker?: (boolean|null);

            /** SatParameters useTimetableEdgeFindingInCumulative */
            useTimetableEdgeFindingInCumulative?: (boolean|null);

            /** SatParameters maxNumIntervalsForTimetableEdgeFinding */
            maxNumIntervalsForTimetableEdgeFinding?: (number|null);

            /** SatParameters useHardPrecedencesInCumulative */
            useHardPrecedencesInCumulative?: (boolean|null);

            /** SatParameters exploitAllPrecedences */
            exploitAllPrecedences?: (boolean|null);

            /** SatParameters useDisjunctiveConstraintInCumulative */
            useDisjunctiveConstraintInCumulative?: (boolean|null);

            /** SatParameters noOverlap_2dBooleanRelationsLimit */
            noOverlap_2dBooleanRelationsLimit?: (number|null);

            /** SatParameters useTimetablingInNoOverlap_2d */
            useTimetablingInNoOverlap_2d?: (boolean|null);

            /** SatParameters useEnergeticReasoningInNoOverlap_2d */
            useEnergeticReasoningInNoOverlap_2d?: (boolean|null);

            /** SatParameters useAreaEnergeticReasoningInNoOverlap_2d */
            useAreaEnergeticReasoningInNoOverlap_2d?: (boolean|null);

            /** SatParameters useTryEdgeReasoningInNoOverlap_2d */
            useTryEdgeReasoningInNoOverlap_2d?: (boolean|null);

            /** SatParameters maxPairsPairwiseReasoningInNoOverlap_2d */
            maxPairsPairwiseReasoningInNoOverlap_2d?: (number|null);

            /** SatParameters maximumRegionsToSplitInDisconnectedNoOverlap_2d */
            maximumRegionsToSplitInDisconnectedNoOverlap_2d?: (number|null);

            /** SatParameters useLinear3ForNoOverlap_2dPrecedences */
            useLinear3ForNoOverlap_2dPrecedences?: (boolean|null);

            /** SatParameters useDualSchedulingHeuristics */
            useDualSchedulingHeuristics?: (boolean|null);

            /** SatParameters useAllDifferentForCircuit */
            useAllDifferentForCircuit?: (boolean|null);

            /** SatParameters routingCutSubsetSizeForBinaryRelationBound */
            routingCutSubsetSizeForBinaryRelationBound?: (number|null);

            /** SatParameters routingCutSubsetSizeForTightBinaryRelationBound */
            routingCutSubsetSizeForTightBinaryRelationBound?: (number|null);

            /** SatParameters routingCutSubsetSizeForExactBinaryRelationBound */
            routingCutSubsetSizeForExactBinaryRelationBound?: (number|null);

            /** SatParameters routingCutSubsetSizeForShortestPathsBound */
            routingCutSubsetSizeForShortestPathsBound?: (number|null);

            /** SatParameters routingCutDpEffort */
            routingCutDpEffort?: (number|null);

            /** SatParameters routingCutMaxInfeasiblePathLength */
            routingCutMaxInfeasiblePathLength?: (number|null);

            /** SatParameters searchBranching */
            searchBranching?: (operations_research.sat.SatParameters.SearchBranching|null);

            /** SatParameters hintConflictLimit */
            hintConflictLimit?: (number|null);

            /** SatParameters repairHint */
            repairHint?: (boolean|null);

            /** SatParameters fixVariablesToTheirHintedValue */
            fixVariablesToTheirHintedValue?: (boolean|null);

            /** SatParameters useProbingSearch */
            useProbingSearch?: (boolean|null);

            /** SatParameters useExtendedProbing */
            useExtendedProbing?: (boolean|null);

            /** SatParameters probingNumCombinationsLimit */
            probingNumCombinationsLimit?: (number|null);

            /** SatParameters shavingDeterministicTimeInProbingSearch */
            shavingDeterministicTimeInProbingSearch?: (number|null);

            /** SatParameters shavingSearchDeterministicTime */
            shavingSearchDeterministicTime?: (number|null);

            /** SatParameters shavingSearchThreshold */
            shavingSearchThreshold?: (number|Long|null);

            /** SatParameters useObjectiveLbSearch */
            useObjectiveLbSearch?: (boolean|null);

            /** SatParameters useObjectiveShavingSearch */
            useObjectiveShavingSearch?: (boolean|null);

            /** SatParameters variablesShavingLevel */
            variablesShavingLevel?: (number|null);

            /** SatParameters pseudoCostReliabilityThreshold */
            pseudoCostReliabilityThreshold?: (number|Long|null);

            /** SatParameters optimizeWithCore */
            optimizeWithCore?: (boolean|null);

            /** SatParameters optimizeWithLbTreeSearch */
            optimizeWithLbTreeSearch?: (boolean|null);

            /** SatParameters saveLpBasisInLbTreeSearch */
            saveLpBasisInLbTreeSearch?: (boolean|null);

            /** SatParameters binarySearchNumConflicts */
            binarySearchNumConflicts?: (number|null);

            /** SatParameters optimizeWithMaxHs */
            optimizeWithMaxHs?: (boolean|null);

            /** SatParameters useFeasibilityJump */
            useFeasibilityJump?: (boolean|null);

            /** SatParameters useLsOnly */
            useLsOnly?: (boolean|null);

            /** SatParameters feasibilityJumpDecay */
            feasibilityJumpDecay?: (number|null);

            /** SatParameters feasibilityJumpLinearizationLevel */
            feasibilityJumpLinearizationLevel?: (number|null);

            /** SatParameters feasibilityJumpRestartFactor */
            feasibilityJumpRestartFactor?: (number|null);

            /** SatParameters feasibilityJumpBatchDtime */
            feasibilityJumpBatchDtime?: (number|null);

            /** SatParameters feasibilityJumpVarRandomizationProbability */
            feasibilityJumpVarRandomizationProbability?: (number|null);

            /** SatParameters feasibilityJumpVarPerburbationRangeRatio */
            feasibilityJumpVarPerburbationRangeRatio?: (number|null);

            /** SatParameters feasibilityJumpEnableRestarts */
            feasibilityJumpEnableRestarts?: (boolean|null);

            /** SatParameters feasibilityJumpMaxExpandedConstraintSize */
            feasibilityJumpMaxExpandedConstraintSize?: (number|null);

            /** SatParameters numViolationLs */
            numViolationLs?: (number|null);

            /** SatParameters violationLsPerturbationPeriod */
            violationLsPerturbationPeriod?: (number|null);

            /** SatParameters violationLsCompoundMoveProbability */
            violationLsCompoundMoveProbability?: (number|null);

            /** SatParameters sharedTreeNumWorkers */
            sharedTreeNumWorkers?: (number|null);

            /** SatParameters useSharedTreeSearch */
            useSharedTreeSearch?: (boolean|null);

            /** SatParameters sharedTreeWorkerMinRestartsPerSubtree */
            sharedTreeWorkerMinRestartsPerSubtree?: (number|null);

            /** SatParameters sharedTreeWorkerEnableTrailSharing */
            sharedTreeWorkerEnableTrailSharing?: (boolean|null);

            /** SatParameters sharedTreeWorkerEnablePhaseSharing */
            sharedTreeWorkerEnablePhaseSharing?: (boolean|null);

            /** SatParameters sharedTreeOpenLeavesPerWorker */
            sharedTreeOpenLeavesPerWorker?: (number|null);

            /** SatParameters sharedTreeMaxNodesPerWorker */
            sharedTreeMaxNodesPerWorker?: (number|null);

            /** SatParameters sharedTreeSplitStrategy */
            sharedTreeSplitStrategy?: (operations_research.sat.SatParameters.SharedTreeSplitStrategy|null);

            /** SatParameters sharedTreeBalanceTolerance */
            sharedTreeBalanceTolerance?: (number|null);

            /** SatParameters enumerateAllSolutions */
            enumerateAllSolutions?: (boolean|null);

            /** SatParameters keepAllFeasibleSolutionsInPresolve */
            keepAllFeasibleSolutionsInPresolve?: (boolean|null);

            /** SatParameters fillTightenedDomainsInResponse */
            fillTightenedDomainsInResponse?: (boolean|null);

            /** SatParameters fillAdditionalSolutionsInResponse */
            fillAdditionalSolutionsInResponse?: (boolean|null);

            /** SatParameters instantiateAllVariables */
            instantiateAllVariables?: (boolean|null);

            /** SatParameters autoDetectGreaterThanAtLeastOneOf */
            autoDetectGreaterThanAtLeastOneOf?: (boolean|null);

            /** SatParameters stopAfterFirstSolution */
            stopAfterFirstSolution?: (boolean|null);

            /** SatParameters stopAfterPresolve */
            stopAfterPresolve?: (boolean|null);

            /** SatParameters stopAfterRootPropagation */
            stopAfterRootPropagation?: (boolean|null);

            /** SatParameters lnsInitialDifficulty */
            lnsInitialDifficulty?: (number|null);

            /** SatParameters lnsInitialDeterministicLimit */
            lnsInitialDeterministicLimit?: (number|null);

            /** SatParameters useLns */
            useLns?: (boolean|null);

            /** SatParameters useLnsOnly */
            useLnsOnly?: (boolean|null);

            /** SatParameters solutionPoolSize */
            solutionPoolSize?: (number|null);

            /** SatParameters useRinsLns */
            useRinsLns?: (boolean|null);

            /** SatParameters useFeasibilityPump */
            useFeasibilityPump?: (boolean|null);

            /** SatParameters useLbRelaxLns */
            useLbRelaxLns?: (boolean|null);

            /** SatParameters lbRelaxNumWorkersThreshold */
            lbRelaxNumWorkersThreshold?: (number|null);

            /** SatParameters fpRounding */
            fpRounding?: (operations_research.sat.SatParameters.FPRoundingMethod|null);

            /** SatParameters diversifyLnsParams */
            diversifyLnsParams?: (boolean|null);

            /** SatParameters randomizeSearch */
            randomizeSearch?: (boolean|null);

            /** SatParameters searchRandomVariablePoolSize */
            searchRandomVariablePoolSize?: (number|Long|null);

            /** SatParameters pushAllTasksTowardStart */
            pushAllTasksTowardStart?: (boolean|null);

            /** SatParameters useOptionalVariables */
            useOptionalVariables?: (boolean|null);

            /** SatParameters useExactLpReason */
            useExactLpReason?: (boolean|null);

            /** SatParameters useCombinedNoOverlap */
            useCombinedNoOverlap?: (boolean|null);

            /** SatParameters atMostOneMaxExpansionSize */
            atMostOneMaxExpansionSize?: (number|null);

            /** SatParameters catchSigintSignal */
            catchSigintSignal?: (boolean|null);

            /** SatParameters useImpliedBounds */
            useImpliedBounds?: (boolean|null);

            /** SatParameters polishLpSolution */
            polishLpSolution?: (boolean|null);

            /** SatParameters lpPrimalTolerance */
            lpPrimalTolerance?: (number|null);

            /** SatParameters lpDualTolerance */
            lpDualTolerance?: (number|null);

            /** SatParameters convertIntervals */
            convertIntervals?: (boolean|null);

            /** SatParameters symmetryLevel */
            symmetryLevel?: (number|null);

            /** SatParameters useSymmetryInLp */
            useSymmetryInLp?: (boolean|null);

            /** SatParameters keepSymmetryInPresolve */
            keepSymmetryInPresolve?: (boolean|null);

            /** SatParameters symmetryDetectionDeterministicTimeLimit */
            symmetryDetectionDeterministicTimeLimit?: (number|null);

            /** SatParameters newLinearPropagation */
            newLinearPropagation?: (boolean|null);

            /** SatParameters linearSplitSize */
            linearSplitSize?: (number|null);

            /** SatParameters linearizationLevel */
            linearizationLevel?: (number|null);

            /** SatParameters booleanEncodingLevel */
            booleanEncodingLevel?: (number|null);

            /** SatParameters maxDomainSizeWhenEncodingEqNeqConstraints */
            maxDomainSizeWhenEncodingEqNeqConstraints?: (number|null);

            /** SatParameters maxNumCuts */
            maxNumCuts?: (number|null);

            /** SatParameters cutLevel */
            cutLevel?: (number|null);

            /** SatParameters onlyAddCutsAtLevelZero */
            onlyAddCutsAtLevelZero?: (boolean|null);

            /** SatParameters addObjectiveCut */
            addObjectiveCut?: (boolean|null);

            /** SatParameters addCgCuts */
            addCgCuts?: (boolean|null);

            /** SatParameters addMirCuts */
            addMirCuts?: (boolean|null);

            /** SatParameters addZeroHalfCuts */
            addZeroHalfCuts?: (boolean|null);

            /** SatParameters addCliqueCuts */
            addCliqueCuts?: (boolean|null);

            /** SatParameters addRltCuts */
            addRltCuts?: (boolean|null);

            /** SatParameters maxAllDiffCutSize */
            maxAllDiffCutSize?: (number|null);

            /** SatParameters addLinMaxCuts */
            addLinMaxCuts?: (boolean|null);

            /** SatParameters maxIntegerRoundingScaling */
            maxIntegerRoundingScaling?: (number|null);

            /** SatParameters addLpConstraintsLazily */
            addLpConstraintsLazily?: (boolean|null);

            /** SatParameters rootLpIterations */
            rootLpIterations?: (number|null);

            /** SatParameters minOrthogonalityForLpConstraints */
            minOrthogonalityForLpConstraints?: (number|null);

            /** SatParameters maxCutRoundsAtLevelZero */
            maxCutRoundsAtLevelZero?: (number|null);

            /** SatParameters maxConsecutiveInactiveCount */
            maxConsecutiveInactiveCount?: (number|null);

            /** SatParameters cutMaxActiveCountValue */
            cutMaxActiveCountValue?: (number|null);

            /** SatParameters cutActiveCountDecay */
            cutActiveCountDecay?: (number|null);

            /** SatParameters cutCleanupTarget */
            cutCleanupTarget?: (number|null);

            /** SatParameters newConstraintsBatchSize */
            newConstraintsBatchSize?: (number|null);

            /** SatParameters exploitIntegerLpSolution */
            exploitIntegerLpSolution?: (boolean|null);

            /** SatParameters exploitAllLpSolution */
            exploitAllLpSolution?: (boolean|null);

            /** SatParameters exploitBestSolution */
            exploitBestSolution?: (boolean|null);

            /** SatParameters exploitRelaxationSolution */
            exploitRelaxationSolution?: (boolean|null);

            /** SatParameters exploitObjective */
            exploitObjective?: (boolean|null);

            /** SatParameters detectLinearizedProduct */
            detectLinearizedProduct?: (boolean|null);

            /** SatParameters mipMaxBound */
            mipMaxBound?: (number|null);

            /** SatParameters mipVarScaling */
            mipVarScaling?: (number|null);

            /** SatParameters mipScaleLargeDomain */
            mipScaleLargeDomain?: (boolean|null);

            /** SatParameters mipAutomaticallyScaleVariables */
            mipAutomaticallyScaleVariables?: (boolean|null);

            /** SatParameters onlySolveIp */
            onlySolveIp?: (boolean|null);

            /** SatParameters mipWantedPrecision */
            mipWantedPrecision?: (number|null);

            /** SatParameters mipMaxActivityExponent */
            mipMaxActivityExponent?: (number|null);

            /** SatParameters mipCheckPrecision */
            mipCheckPrecision?: (number|null);

            /** SatParameters mipComputeTrueObjectiveBound */
            mipComputeTrueObjectiveBound?: (boolean|null);

            /** SatParameters mipMaxValidMagnitude */
            mipMaxValidMagnitude?: (number|null);

            /** SatParameters mipTreatHighMagnitudeBoundsAsInfinity */
            mipTreatHighMagnitudeBoundsAsInfinity?: (boolean|null);

            /** SatParameters mipDropTolerance */
            mipDropTolerance?: (number|null);

            /** SatParameters mipPresolveLevel */
            mipPresolveLevel?: (number|null);
        }

        /** Represents a SatParameters. */
        class SatParameters implements ISatParameters {

            /**
             * Constructs a new SatParameters.
             * @param [properties] Properties to set
             */
            constructor(properties?: operations_research.sat.ISatParameters);

            /** SatParameters name. */
            public name: string;

            /** SatParameters preferredVariableOrder. */
            public preferredVariableOrder: operations_research.sat.SatParameters.VariableOrder;

            /** SatParameters initialPolarity. */
            public initialPolarity: operations_research.sat.SatParameters.Polarity;

            /** SatParameters usePhaseSaving. */
            public usePhaseSaving: boolean;

            /** SatParameters polarityRephaseIncrement. */
            public polarityRephaseIncrement: number;

            /** SatParameters polarityExploitLsHints. */
            public polarityExploitLsHints: boolean;

            /** SatParameters randomPolarityRatio. */
            public randomPolarityRatio: number;

            /** SatParameters randomBranchesRatio. */
            public randomBranchesRatio: number;

            /** SatParameters useErwaHeuristic. */
            public useErwaHeuristic: boolean;

            /** SatParameters initialVariablesActivity. */
            public initialVariablesActivity: number;

            /** SatParameters alsoBumpVariablesInConflictReasons. */
            public alsoBumpVariablesInConflictReasons: boolean;

            /** SatParameters minimizationAlgorithm. */
            public minimizationAlgorithm: operations_research.sat.SatParameters.ConflictMinimizationAlgorithm;

            /** SatParameters binaryMinimizationAlgorithm. */
            public binaryMinimizationAlgorithm: operations_research.sat.SatParameters.BinaryMinizationAlgorithm;

            /** SatParameters subsumptionDuringConflictAnalysis. */
            public subsumptionDuringConflictAnalysis: boolean;

            /** SatParameters clauseCleanupPeriod. */
            public clauseCleanupPeriod: number;

            /** SatParameters clauseCleanupTarget. */
            public clauseCleanupTarget: number;

            /** SatParameters clauseCleanupRatio. */
            public clauseCleanupRatio: number;

            /** SatParameters clauseCleanupProtection. */
            public clauseCleanupProtection: operations_research.sat.SatParameters.ClauseProtection;

            /** SatParameters clauseCleanupLbdBound. */
            public clauseCleanupLbdBound: number;

            /** SatParameters clauseCleanupOrdering. */
            public clauseCleanupOrdering: operations_research.sat.SatParameters.ClauseOrdering;

            /** SatParameters pbCleanupIncrement. */
            public pbCleanupIncrement: number;

            /** SatParameters pbCleanupRatio. */
            public pbCleanupRatio: number;

            /** SatParameters variableActivityDecay. */
            public variableActivityDecay: number;

            /** SatParameters maxVariableActivityValue. */
            public maxVariableActivityValue: number;

            /** SatParameters glucoseMaxDecay. */
            public glucoseMaxDecay: number;

            /** SatParameters glucoseDecayIncrement. */
            public glucoseDecayIncrement: number;

            /** SatParameters glucoseDecayIncrementPeriod. */
            public glucoseDecayIncrementPeriod: number;

            /** SatParameters clauseActivityDecay. */
            public clauseActivityDecay: number;

            /** SatParameters maxClauseActivityValue. */
            public maxClauseActivityValue: number;

            /** SatParameters restartAlgorithms. */
            public restartAlgorithms: operations_research.sat.SatParameters.RestartAlgorithm[];

            /** SatParameters defaultRestartAlgorithms. */
            public defaultRestartAlgorithms: string;

            /** SatParameters restartPeriod. */
            public restartPeriod: number;

            /** SatParameters restartRunningWindowSize. */
            public restartRunningWindowSize: number;

            /** SatParameters restartDlAverageRatio. */
            public restartDlAverageRatio: number;

            /** SatParameters restartLbdAverageRatio. */
            public restartLbdAverageRatio: number;

            /** SatParameters useBlockingRestart. */
            public useBlockingRestart: boolean;

            /** SatParameters blockingRestartWindowSize. */
            public blockingRestartWindowSize: number;

            /** SatParameters blockingRestartMultiplier. */
            public blockingRestartMultiplier: number;

            /** SatParameters numConflictsBeforeStrategyChanges. */
            public numConflictsBeforeStrategyChanges: number;

            /** SatParameters strategyChangeIncreaseRatio. */
            public strategyChangeIncreaseRatio: number;

            /** SatParameters maxTimeInSeconds. */
            public maxTimeInSeconds: number;

            /** SatParameters maxDeterministicTime. */
            public maxDeterministicTime: number;

            /** SatParameters maxNumDeterministicBatches. */
            public maxNumDeterministicBatches: number;

            /** SatParameters maxNumberOfConflicts. */
            public maxNumberOfConflicts: (number|Long);

            /** SatParameters maxMemoryInMb. */
            public maxMemoryInMb: (number|Long);

            /** SatParameters absoluteGapLimit. */
            public absoluteGapLimit: number;

            /** SatParameters relativeGapLimit. */
            public relativeGapLimit: number;

            /** SatParameters randomSeed. */
            public randomSeed: number;

            /** SatParameters permuteVariableRandomly. */
            public permuteVariableRandomly: boolean;

            /** SatParameters permutePresolveConstraintOrder. */
            public permutePresolveConstraintOrder: boolean;

            /** SatParameters useAbslRandom. */
            public useAbslRandom: boolean;

            /** SatParameters logSearchProgress. */
            public logSearchProgress: boolean;

            /** SatParameters logSubsolverStatistics. */
            public logSubsolverStatistics: boolean;

            /** SatParameters logPrefix. */
            public logPrefix: string;

            /** SatParameters logToStdout. */
            public logToStdout: boolean;

            /** SatParameters logToResponse. */
            public logToResponse: boolean;

            /** SatParameters usePbResolution. */
            public usePbResolution: boolean;

            /** SatParameters minimizeReductionDuringPbResolution. */
            public minimizeReductionDuringPbResolution: boolean;

            /** SatParameters countAssumptionLevelsInLbd. */
            public countAssumptionLevelsInLbd: boolean;

            /** SatParameters presolveBveThreshold. */
            public presolveBveThreshold: number;

            /** SatParameters filterSatPostsolveClauses. */
            public filterSatPostsolveClauses: boolean;

            /** SatParameters presolveBveClauseWeight. */
            public presolveBveClauseWeight: number;

            /** SatParameters probingDeterministicTimeLimit. */
            public probingDeterministicTimeLimit: number;

            /** SatParameters presolveProbingDeterministicTimeLimit. */
            public presolveProbingDeterministicTimeLimit: number;

            /** SatParameters presolveBlockedClause. */
            public presolveBlockedClause: boolean;

            /** SatParameters presolveUseBva. */
            public presolveUseBva: boolean;

            /** SatParameters presolveBvaThreshold. */
            public presolveBvaThreshold: number;

            /** SatParameters maxPresolveIterations. */
            public maxPresolveIterations: number;

            /** SatParameters cpModelPresolve. */
            public cpModelPresolve: boolean;

            /** SatParameters cpModelProbingLevel. */
            public cpModelProbingLevel: number;

            /** SatParameters cpModelUseSatPresolve. */
            public cpModelUseSatPresolve: boolean;

            /** SatParameters removeFixedVariablesEarly. */
            public removeFixedVariablesEarly: boolean;

            /** SatParameters detectTableWithCost. */
            public detectTableWithCost: boolean;

            /** SatParameters tableCompressionLevel. */
            public tableCompressionLevel: number;

            /** SatParameters expandAlldiffConstraints. */
            public expandAlldiffConstraints: boolean;

            /** SatParameters maxAlldiffDomainSize. */
            public maxAlldiffDomainSize: number;

            /** SatParameters expandReservoirConstraints. */
            public expandReservoirConstraints: boolean;

            /** SatParameters expandReservoirUsingCircuit. */
            public expandReservoirUsingCircuit: boolean;

            /** SatParameters encodeCumulativeAsReservoir. */
            public encodeCumulativeAsReservoir: boolean;

            /** SatParameters maxLinMaxSizeForExpansion. */
            public maxLinMaxSizeForExpansion: number;

            /** SatParameters disableConstraintExpansion. */
            public disableConstraintExpansion: boolean;

            /** SatParameters encodeComplexLinearConstraintWithInteger. */
            public encodeComplexLinearConstraintWithInteger: boolean;

            /** SatParameters mergeNoOverlapWorkLimit. */
            public mergeNoOverlapWorkLimit: number;

            /** SatParameters mergeAtMostOneWorkLimit. */
            public mergeAtMostOneWorkLimit: number;

            /** SatParameters presolveSubstitutionLevel. */
            public presolveSubstitutionLevel: number;

            /** SatParameters presolveExtractIntegerEnforcement. */
            public presolveExtractIntegerEnforcement: boolean;

            /** SatParameters presolveInclusionWorkLimit. */
            public presolveInclusionWorkLimit: (number|Long);

            /** SatParameters ignoreNames. */
            public ignoreNames: boolean;

            /** SatParameters inferAllDiffs. */
            public inferAllDiffs: boolean;

            /** SatParameters findBigLinearOverlap. */
            public findBigLinearOverlap: boolean;

            /** SatParameters useSatInprocessing. */
            public useSatInprocessing: boolean;

            /** SatParameters inprocessingDtimeRatio. */
            public inprocessingDtimeRatio: number;

            /** SatParameters inprocessingProbingDtime. */
            public inprocessingProbingDtime: number;

            /** SatParameters inprocessingMinimizationDtime. */
            public inprocessingMinimizationDtime: number;

            /** SatParameters inprocessingMinimizationUseConflictAnalysis. */
            public inprocessingMinimizationUseConflictAnalysis: boolean;

            /** SatParameters inprocessingMinimizationUseAllOrderings. */
            public inprocessingMinimizationUseAllOrderings: boolean;

            /** SatParameters numWorkers. */
            public numWorkers: number;

            /** SatParameters numSearchWorkers. */
            public numSearchWorkers: number;

            /** SatParameters numFullSubsolvers. */
            public numFullSubsolvers: number;

            /** SatParameters subsolvers. */
            public subsolvers: string[];

            /** SatParameters extraSubsolvers. */
            public extraSubsolvers: string[];

            /** SatParameters ignoreSubsolvers. */
            public ignoreSubsolvers: string[];

            /** SatParameters filterSubsolvers. */
            public filterSubsolvers: string[];

            /** SatParameters subsolverParams. */
            public subsolverParams: operations_research.sat.ISatParameters[];

            /** SatParameters interleaveSearch. */
            public interleaveSearch: boolean;

            /** SatParameters interleaveBatchSize. */
            public interleaveBatchSize: number;

            /** SatParameters shareObjectiveBounds. */
            public shareObjectiveBounds: boolean;

            /** SatParameters shareLevelZeroBounds. */
            public shareLevelZeroBounds: boolean;

            /** SatParameters shareBinaryClauses. */
            public shareBinaryClauses: boolean;

            /** SatParameters shareGlueClauses. */
            public shareGlueClauses: boolean;

            /** SatParameters minimizeSharedClauses. */
            public minimizeSharedClauses: boolean;

            /** SatParameters shareGlueClausesDtime. */
            public shareGlueClausesDtime: number;

            /** SatParameters debugPostsolveWithFullSolver. */
            public debugPostsolveWithFullSolver: boolean;

            /** SatParameters debugMaxNumPresolveOperations. */
            public debugMaxNumPresolveOperations: number;

            /** SatParameters debugCrashOnBadHint. */
            public debugCrashOnBadHint: boolean;

            /** SatParameters debugCrashIfPresolveBreaksHint. */
            public debugCrashIfPresolveBreaksHint: boolean;

            /** SatParameters useOptimizationHints. */
            public useOptimizationHints: boolean;

            /** SatParameters coreMinimizationLevel. */
            public coreMinimizationLevel: number;

            /** SatParameters findMultipleCores. */
            public findMultipleCores: boolean;

            /** SatParameters coverOptimization. */
            public coverOptimization: boolean;

            /** SatParameters maxSatAssumptionOrder. */
            public maxSatAssumptionOrder: operations_research.sat.SatParameters.MaxSatAssumptionOrder;

            /** SatParameters maxSatReverseAssumptionOrder. */
            public maxSatReverseAssumptionOrder: boolean;

            /** SatParameters maxSatStratification. */
            public maxSatStratification: operations_research.sat.SatParameters.MaxSatStratificationAlgorithm;

            /** SatParameters propagationLoopDetectionFactor. */
            public propagationLoopDetectionFactor: number;

            /** SatParameters usePrecedencesInDisjunctiveConstraint. */
            public usePrecedencesInDisjunctiveConstraint: boolean;

            /** SatParameters maxSizeToCreatePrecedenceLiteralsInDisjunctive. */
            public maxSizeToCreatePrecedenceLiteralsInDisjunctive: number;

            /** SatParameters useStrongPropagationInDisjunctive. */
            public useStrongPropagationInDisjunctive: boolean;

            /** SatParameters useDynamicPrecedenceInDisjunctive. */
            public useDynamicPrecedenceInDisjunctive: boolean;

            /** SatParameters useDynamicPrecedenceInCumulative. */
            public useDynamicPrecedenceInCumulative: boolean;

            /** SatParameters useOverloadCheckerInCumulative. */
            public useOverloadCheckerInCumulative: boolean;

            /** SatParameters useConservativeScaleOverloadChecker. */
            public useConservativeScaleOverloadChecker: boolean;

            /** SatParameters useTimetableEdgeFindingInCumulative. */
            public useTimetableEdgeFindingInCumulative: boolean;

            /** SatParameters maxNumIntervalsForTimetableEdgeFinding. */
            public maxNumIntervalsForTimetableEdgeFinding: number;

            /** SatParameters useHardPrecedencesInCumulative. */
            public useHardPrecedencesInCumulative: boolean;

            /** SatParameters exploitAllPrecedences. */
            public exploitAllPrecedences: boolean;

            /** SatParameters useDisjunctiveConstraintInCumulative. */
            public useDisjunctiveConstraintInCumulative: boolean;

            /** SatParameters noOverlap_2dBooleanRelationsLimit. */
            public noOverlap_2dBooleanRelationsLimit: number;

            /** SatParameters useTimetablingInNoOverlap_2d. */
            public useTimetablingInNoOverlap_2d: boolean;

            /** SatParameters useEnergeticReasoningInNoOverlap_2d. */
            public useEnergeticReasoningInNoOverlap_2d: boolean;

            /** SatParameters useAreaEnergeticReasoningInNoOverlap_2d. */
            public useAreaEnergeticReasoningInNoOverlap_2d: boolean;

            /** SatParameters useTryEdgeReasoningInNoOverlap_2d. */
            public useTryEdgeReasoningInNoOverlap_2d: boolean;

            /** SatParameters maxPairsPairwiseReasoningInNoOverlap_2d. */
            public maxPairsPairwiseReasoningInNoOverlap_2d: number;

            /** SatParameters maximumRegionsToSplitInDisconnectedNoOverlap_2d. */
            public maximumRegionsToSplitInDisconnectedNoOverlap_2d: number;

            /** SatParameters useLinear3ForNoOverlap_2dPrecedences. */
            public useLinear3ForNoOverlap_2dPrecedences: boolean;

            /** SatParameters useDualSchedulingHeuristics. */
            public useDualSchedulingHeuristics: boolean;

            /** SatParameters useAllDifferentForCircuit. */
            public useAllDifferentForCircuit: boolean;

            /** SatParameters routingCutSubsetSizeForBinaryRelationBound. */
            public routingCutSubsetSizeForBinaryRelationBound: number;

            /** SatParameters routingCutSubsetSizeForTightBinaryRelationBound. */
            public routingCutSubsetSizeForTightBinaryRelationBound: number;

            /** SatParameters routingCutSubsetSizeForExactBinaryRelationBound. */
            public routingCutSubsetSizeForExactBinaryRelationBound: number;

            /** SatParameters routingCutSubsetSizeForShortestPathsBound. */
            public routingCutSubsetSizeForShortestPathsBound: number;

            /** SatParameters routingCutDpEffort. */
            public routingCutDpEffort: number;

            /** SatParameters routingCutMaxInfeasiblePathLength. */
            public routingCutMaxInfeasiblePathLength: number;

            /** SatParameters searchBranching. */
            public searchBranching: operations_research.sat.SatParameters.SearchBranching;

            /** SatParameters hintConflictLimit. */
            public hintConflictLimit: number;

            /** SatParameters repairHint. */
            public repairHint: boolean;

            /** SatParameters fixVariablesToTheirHintedValue. */
            public fixVariablesToTheirHintedValue: boolean;

            /** SatParameters useProbingSearch. */
            public useProbingSearch: boolean;

            /** SatParameters useExtendedProbing. */
            public useExtendedProbing: boolean;

            /** SatParameters probingNumCombinationsLimit. */
            public probingNumCombinationsLimit: number;

            /** SatParameters shavingDeterministicTimeInProbingSearch. */
            public shavingDeterministicTimeInProbingSearch: number;

            /** SatParameters shavingSearchDeterministicTime. */
            public shavingSearchDeterministicTime: number;

            /** SatParameters shavingSearchThreshold. */
            public shavingSearchThreshold: (number|Long);

            /** SatParameters useObjectiveLbSearch. */
            public useObjectiveLbSearch: boolean;

            /** SatParameters useObjectiveShavingSearch. */
            public useObjectiveShavingSearch: boolean;

            /** SatParameters variablesShavingLevel. */
            public variablesShavingLevel: number;

            /** SatParameters pseudoCostReliabilityThreshold. */
            public pseudoCostReliabilityThreshold: (number|Long);

            /** SatParameters optimizeWithCore. */
            public optimizeWithCore: boolean;

            /** SatParameters optimizeWithLbTreeSearch. */
            public optimizeWithLbTreeSearch: boolean;

            /** SatParameters saveLpBasisInLbTreeSearch. */
            public saveLpBasisInLbTreeSearch: boolean;

            /** SatParameters binarySearchNumConflicts. */
            public binarySearchNumConflicts: number;

            /** SatParameters optimizeWithMaxHs. */
            public optimizeWithMaxHs: boolean;

            /** SatParameters useFeasibilityJump. */
            public useFeasibilityJump: boolean;

            /** SatParameters useLsOnly. */
            public useLsOnly: boolean;

            /** SatParameters feasibilityJumpDecay. */
            public feasibilityJumpDecay: number;

            /** SatParameters feasibilityJumpLinearizationLevel. */
            public feasibilityJumpLinearizationLevel: number;

            /** SatParameters feasibilityJumpRestartFactor. */
            public feasibilityJumpRestartFactor: number;

            /** SatParameters feasibilityJumpBatchDtime. */
            public feasibilityJumpBatchDtime: number;

            /** SatParameters feasibilityJumpVarRandomizationProbability. */
            public feasibilityJumpVarRandomizationProbability: number;

            /** SatParameters feasibilityJumpVarPerburbationRangeRatio. */
            public feasibilityJumpVarPerburbationRangeRatio: number;

            /** SatParameters feasibilityJumpEnableRestarts. */
            public feasibilityJumpEnableRestarts: boolean;

            /** SatParameters feasibilityJumpMaxExpandedConstraintSize. */
            public feasibilityJumpMaxExpandedConstraintSize: number;

            /** SatParameters numViolationLs. */
            public numViolationLs: number;

            /** SatParameters violationLsPerturbationPeriod. */
            public violationLsPerturbationPeriod: number;

            /** SatParameters violationLsCompoundMoveProbability. */
            public violationLsCompoundMoveProbability: number;

            /** SatParameters sharedTreeNumWorkers. */
            public sharedTreeNumWorkers: number;

            /** SatParameters useSharedTreeSearch. */
            public useSharedTreeSearch: boolean;

            /** SatParameters sharedTreeWorkerMinRestartsPerSubtree. */
            public sharedTreeWorkerMinRestartsPerSubtree: number;

            /** SatParameters sharedTreeWorkerEnableTrailSharing. */
            public sharedTreeWorkerEnableTrailSharing: boolean;

            /** SatParameters sharedTreeWorkerEnablePhaseSharing. */
            public sharedTreeWorkerEnablePhaseSharing: boolean;

            /** SatParameters sharedTreeOpenLeavesPerWorker. */
            public sharedTreeOpenLeavesPerWorker: number;

            /** SatParameters sharedTreeMaxNodesPerWorker. */
            public sharedTreeMaxNodesPerWorker: number;

            /** SatParameters sharedTreeSplitStrategy. */
            public sharedTreeSplitStrategy: operations_research.sat.SatParameters.SharedTreeSplitStrategy;

            /** SatParameters sharedTreeBalanceTolerance. */
            public sharedTreeBalanceTolerance: number;

            /** SatParameters enumerateAllSolutions. */
            public enumerateAllSolutions: boolean;

            /** SatParameters keepAllFeasibleSolutionsInPresolve. */
            public keepAllFeasibleSolutionsInPresolve: boolean;

            /** SatParameters fillTightenedDomainsInResponse. */
            public fillTightenedDomainsInResponse: boolean;

            /** SatParameters fillAdditionalSolutionsInResponse. */
            public fillAdditionalSolutionsInResponse: boolean;

            /** SatParameters instantiateAllVariables. */
            public instantiateAllVariables: boolean;

            /** SatParameters autoDetectGreaterThanAtLeastOneOf. */
            public autoDetectGreaterThanAtLeastOneOf: boolean;

            /** SatParameters stopAfterFirstSolution. */
            public stopAfterFirstSolution: boolean;

            /** SatParameters stopAfterPresolve. */
            public stopAfterPresolve: boolean;

            /** SatParameters stopAfterRootPropagation. */
            public stopAfterRootPropagation: boolean;

            /** SatParameters lnsInitialDifficulty. */
            public lnsInitialDifficulty: number;

            /** SatParameters lnsInitialDeterministicLimit. */
            public lnsInitialDeterministicLimit: number;

            /** SatParameters useLns. */
            public useLns: boolean;

            /** SatParameters useLnsOnly. */
            public useLnsOnly: boolean;

            /** SatParameters solutionPoolSize. */
            public solutionPoolSize: number;

            /** SatParameters useRinsLns. */
            public useRinsLns: boolean;

            /** SatParameters useFeasibilityPump. */
            public useFeasibilityPump: boolean;

            /** SatParameters useLbRelaxLns. */
            public useLbRelaxLns: boolean;

            /** SatParameters lbRelaxNumWorkersThreshold. */
            public lbRelaxNumWorkersThreshold: number;

            /** SatParameters fpRounding. */
            public fpRounding: operations_research.sat.SatParameters.FPRoundingMethod;

            /** SatParameters diversifyLnsParams. */
            public diversifyLnsParams: boolean;

            /** SatParameters randomizeSearch. */
            public randomizeSearch: boolean;

            /** SatParameters searchRandomVariablePoolSize. */
            public searchRandomVariablePoolSize: (number|Long);

            /** SatParameters pushAllTasksTowardStart. */
            public pushAllTasksTowardStart: boolean;

            /** SatParameters useOptionalVariables. */
            public useOptionalVariables: boolean;

            /** SatParameters useExactLpReason. */
            public useExactLpReason: boolean;

            /** SatParameters useCombinedNoOverlap. */
            public useCombinedNoOverlap: boolean;

            /** SatParameters atMostOneMaxExpansionSize. */
            public atMostOneMaxExpansionSize: number;

            /** SatParameters catchSigintSignal. */
            public catchSigintSignal: boolean;

            /** SatParameters useImpliedBounds. */
            public useImpliedBounds: boolean;

            /** SatParameters polishLpSolution. */
            public polishLpSolution: boolean;

            /** SatParameters lpPrimalTolerance. */
            public lpPrimalTolerance: number;

            /** SatParameters lpDualTolerance. */
            public lpDualTolerance: number;

            /** SatParameters convertIntervals. */
            public convertIntervals: boolean;

            /** SatParameters symmetryLevel. */
            public symmetryLevel: number;

            /** SatParameters useSymmetryInLp. */
            public useSymmetryInLp: boolean;

            /** SatParameters keepSymmetryInPresolve. */
            public keepSymmetryInPresolve: boolean;

            /** SatParameters symmetryDetectionDeterministicTimeLimit. */
            public symmetryDetectionDeterministicTimeLimit: number;

            /** SatParameters newLinearPropagation. */
            public newLinearPropagation: boolean;

            /** SatParameters linearSplitSize. */
            public linearSplitSize: number;

            /** SatParameters linearizationLevel. */
            public linearizationLevel: number;

            /** SatParameters booleanEncodingLevel. */
            public booleanEncodingLevel: number;

            /** SatParameters maxDomainSizeWhenEncodingEqNeqConstraints. */
            public maxDomainSizeWhenEncodingEqNeqConstraints: number;

            /** SatParameters maxNumCuts. */
            public maxNumCuts: number;

            /** SatParameters cutLevel. */
            public cutLevel: number;

            /** SatParameters onlyAddCutsAtLevelZero. */
            public onlyAddCutsAtLevelZero: boolean;

            /** SatParameters addObjectiveCut. */
            public addObjectiveCut: boolean;

            /** SatParameters addCgCuts. */
            public addCgCuts: boolean;

            /** SatParameters addMirCuts. */
            public addMirCuts: boolean;

            /** SatParameters addZeroHalfCuts. */
            public addZeroHalfCuts: boolean;

            /** SatParameters addCliqueCuts. */
            public addCliqueCuts: boolean;

            /** SatParameters addRltCuts. */
            public addRltCuts: boolean;

            /** SatParameters maxAllDiffCutSize. */
            public maxAllDiffCutSize: number;

            /** SatParameters addLinMaxCuts. */
            public addLinMaxCuts: boolean;

            /** SatParameters maxIntegerRoundingScaling. */
            public maxIntegerRoundingScaling: number;

            /** SatParameters addLpConstraintsLazily. */
            public addLpConstraintsLazily: boolean;

            /** SatParameters rootLpIterations. */
            public rootLpIterations: number;

            /** SatParameters minOrthogonalityForLpConstraints. */
            public minOrthogonalityForLpConstraints: number;

            /** SatParameters maxCutRoundsAtLevelZero. */
            public maxCutRoundsAtLevelZero: number;

            /** SatParameters maxConsecutiveInactiveCount. */
            public maxConsecutiveInactiveCount: number;

            /** SatParameters cutMaxActiveCountValue. */
            public cutMaxActiveCountValue: number;

            /** SatParameters cutActiveCountDecay. */
            public cutActiveCountDecay: number;

            /** SatParameters cutCleanupTarget. */
            public cutCleanupTarget: number;

            /** SatParameters newConstraintsBatchSize. */
            public newConstraintsBatchSize: number;

            /** SatParameters exploitIntegerLpSolution. */
            public exploitIntegerLpSolution: boolean;

            /** SatParameters exploitAllLpSolution. */
            public exploitAllLpSolution: boolean;

            /** SatParameters exploitBestSolution. */
            public exploitBestSolution: boolean;

            /** SatParameters exploitRelaxationSolution. */
            public exploitRelaxationSolution: boolean;

            /** SatParameters exploitObjective. */
            public exploitObjective: boolean;

            /** SatParameters detectLinearizedProduct. */
            public detectLinearizedProduct: boolean;

            /** SatParameters mipMaxBound. */
            public mipMaxBound: number;

            /** SatParameters mipVarScaling. */
            public mipVarScaling: number;

            /** SatParameters mipScaleLargeDomain. */
            public mipScaleLargeDomain: boolean;

            /** SatParameters mipAutomaticallyScaleVariables. */
            public mipAutomaticallyScaleVariables: boolean;

            /** SatParameters onlySolveIp. */
            public onlySolveIp: boolean;

            /** SatParameters mipWantedPrecision. */
            public mipWantedPrecision: number;

            /** SatParameters mipMaxActivityExponent. */
            public mipMaxActivityExponent: number;

            /** SatParameters mipCheckPrecision. */
            public mipCheckPrecision: number;

            /** SatParameters mipComputeTrueObjectiveBound. */
            public mipComputeTrueObjectiveBound: boolean;

            /** SatParameters mipMaxValidMagnitude. */
            public mipMaxValidMagnitude: number;

            /** SatParameters mipTreatHighMagnitudeBoundsAsInfinity. */
            public mipTreatHighMagnitudeBoundsAsInfinity: boolean;

            /** SatParameters mipDropTolerance. */
            public mipDropTolerance: number;

            /** SatParameters mipPresolveLevel. */
            public mipPresolveLevel: number;

            /**
             * Creates a new SatParameters instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SatParameters instance
             */
            public static create(properties?: operations_research.sat.ISatParameters): operations_research.sat.SatParameters;

            /**
             * Encodes the specified SatParameters message. Does not implicitly {@link operations_research.sat.SatParameters.verify|verify} messages.
             * @param message SatParameters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: operations_research.sat.ISatParameters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SatParameters message, length delimited. Does not implicitly {@link operations_research.sat.SatParameters.verify|verify} messages.
             * @param message SatParameters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: operations_research.sat.ISatParameters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SatParameters message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SatParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): operations_research.sat.SatParameters;

            /**
             * Decodes a SatParameters message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SatParameters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): operations_research.sat.SatParameters;

            /**
             * Verifies a SatParameters message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SatParameters message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SatParameters
             */
            public static fromObject(object: { [k: string]: any }): operations_research.sat.SatParameters;

            /**
             * Creates a plain object from a SatParameters message. Also converts values to other types if specified.
             * @param message SatParameters
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: operations_research.sat.SatParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SatParameters to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SatParameters
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SatParameters {

            /** VariableOrder enum. */
            enum VariableOrder {
                IN_ORDER = 0,
                IN_REVERSE_ORDER = 1,
                IN_RANDOM_ORDER = 2
            }

            /** Polarity enum. */
            enum Polarity {
                POLARITY_TRUE = 0,
                POLARITY_FALSE = 1,
                POLARITY_RANDOM = 2
            }

            /** ConflictMinimizationAlgorithm enum. */
            enum ConflictMinimizationAlgorithm {
                NONE = 0,
                SIMPLE = 1,
                RECURSIVE = 2,
                EXPERIMENTAL = 3
            }

            /** BinaryMinizationAlgorithm enum. */
            enum BinaryMinizationAlgorithm {
                NO_BINARY_MINIMIZATION = 0,
                BINARY_MINIMIZATION_FIRST = 1,
                BINARY_MINIMIZATION_FIRST_WITH_TRANSITIVE_REDUCTION = 4,
                BINARY_MINIMIZATION_WITH_REACHABILITY = 2,
                EXPERIMENTAL_BINARY_MINIMIZATION = 3
            }

            /** ClauseProtection enum. */
            enum ClauseProtection {
                PROTECTION_NONE = 0,
                PROTECTION_ALWAYS = 1,
                PROTECTION_LBD = 2
            }

            /** ClauseOrdering enum. */
            enum ClauseOrdering {
                CLAUSE_ACTIVITY = 0,
                CLAUSE_LBD = 1
            }

            /** RestartAlgorithm enum. */
            enum RestartAlgorithm {
                NO_RESTART = 0,
                LUBY_RESTART = 1,
                DL_MOVING_AVERAGE_RESTART = 2,
                LBD_MOVING_AVERAGE_RESTART = 3,
                FIXED_RESTART = 4
            }

            /** MaxSatAssumptionOrder enum. */
            enum MaxSatAssumptionOrder {
                DEFAULT_ASSUMPTION_ORDER = 0,
                ORDER_ASSUMPTION_BY_DEPTH = 1,
                ORDER_ASSUMPTION_BY_WEIGHT = 2
            }

            /** MaxSatStratificationAlgorithm enum. */
            enum MaxSatStratificationAlgorithm {
                STRATIFICATION_NONE = 0,
                STRATIFICATION_DESCENT = 1,
                STRATIFICATION_ASCENT = 2
            }

            /** SearchBranching enum. */
            enum SearchBranching {
                AUTOMATIC_SEARCH = 0,
                FIXED_SEARCH = 1,
                PORTFOLIO_SEARCH = 2,
                LP_SEARCH = 3,
                PSEUDO_COST_SEARCH = 4,
                PORTFOLIO_WITH_QUICK_RESTART_SEARCH = 5,
                HINT_SEARCH = 6,
                PARTIAL_FIXED_SEARCH = 7,
                RANDOMIZED_SEARCH = 8
            }

            /** SharedTreeSplitStrategy enum. */
            enum SharedTreeSplitStrategy {
                SPLIT_STRATEGY_AUTO = 0,
                SPLIT_STRATEGY_DISCREPANCY = 1,
                SPLIT_STRATEGY_OBJECTIVE_LB = 2,
                SPLIT_STRATEGY_BALANCED_TREE = 3,
                SPLIT_STRATEGY_FIRST_PROPOSAL = 4
            }

            /** FPRoundingMethod enum. */
            enum FPRoundingMethod {
                NEAREST_INTEGER = 0,
                LOCK_BASED = 1,
                ACTIVE_LOCK_BASED = 3,
                PROPAGATION_ASSISTED = 2
            }
        }
    }

    /** OptionalBoolean enum. */
    enum OptionalBoolean {
        BOOL_UNSPECIFIED = 0,
        BOOL_FALSE = 2,
        BOOL_TRUE = 3
    }
}
