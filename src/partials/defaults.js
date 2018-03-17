module.exports = [
    {
        "scope": "constant.language",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "constant.numeric",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": "constant.regexp",
        "settings": { "foreground": "#646695" }
    },
    {
        "scope": "entity.name.tag",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "entity.other.attribute-name",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": "invalid",
        "settings": { "foreground": "#f44747" }
    },
// SECTION: markup
    {
        "scope": "markup.underline",
        "settings": {
            "fontStyle": "underline"
        }
    },
    {
        "scope": "markup.bold",
        "settings": {
            "fontStyle": "bold"
            // "foreground": "#569cd6"
        }
    },
    {
        "scope": "markup.heading",
        "settings": {
            "fontStyle": "bold",
            "foreground": "#569cd6"
        }
    },
    {
        "scope": "markup.italic",
        "settings": {
            "fontStyle": "italic"
        }
    },
    {
        "scope": "markup.inserted",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": "markup.deleted",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "markup.changed",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "markup.inline.raw",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "fenced_code.block.language",
        "settings": { "foreground": "#4EC9B0" }
    },
    {
        "scope": "meta.selector",
        "settings": { "foreground": "#d7ba7d" }
    },
    {
        "name": "brackets of XML/HTML tags",
        "scope": "punctuation.definition.tag",
        "settings": { "foreground": "#808080" }
    },
    {
        "scope": "meta.preprocessor",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "meta.preprocessor.string",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "meta.preprocessor.numeric",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": "meta.structure.dictionary.key.python",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": "meta.diff.header",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "storage",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "storage.type",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "storage.modifier",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "string",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "string.tag",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "string.value",
        "settings": { "foreground": "#ce9178" }
    },
    {
        "scope": "string.regexp",
        "settings": { "foreground": "#d16969" }
    },
    {
        "name": "JavaScript string interpolation ${}",
        "scope": [
            "punctuation.definition.template-expression.begin.js",
            "punctuation.definition.template-expression.begin.ts",
            "punctuation.definition.template-expression.end.ts",
            "punctuation.definition.template-expression.end.js",
            "punctuation.section.embedded.coffee"
        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "name": "Reset JavaScript string interpolation expression",
        "scope": [
            "meta.template.expression.js",
            "meta.template.expression.ts"
        ],
        "settings": { "foreground": "#d4d4d4" }
    },
    {
        "scope": "meta.object-literal.key.js string.quoted.double.js",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": "keyword",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "keyword.control",
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "keyword.operator",
        "settings": { "foreground": "#d4d4d4" }
    },
    {
        "scope": [
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
            "keyword.operator.logical.python"
        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "keyword.other.unit",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": [
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php"
        ],
        "settings": { "foreground": "#569cd6" }
    },
    {
        "scope": "support.function.git-rebase",
        "settings": { "foreground": "#9cdcfe" }
    },
    {
        "scope": "constant.sha.git-rebase",
        "settings": { "foreground": "#b5cea8" }
    },
    {
        "scope": [
            "entity.name.function",
            "support.function",
            "support.constant.handlebars"
        ],
        "settings": {"foreground": "#dcdcaa"}
    },
    {
        "name": "Types declaration and references",
        "scope": [
            "meta.return-type",
            "support.class",
            "support.type",
            "entity.name.type",
            "entity.name.class",
            "storage.type.cs",
            "storage.type.generic.cs",
            "storage.type.modifier.cs",
            "storage.type.variable.cs",
            "storage.type.annotation.java",
            "storage.type.generic.java",
            "storage.type.java",
            "storage.type.object.array.java",
            "storage.type.primitive.array.java",
            "storage.type.primitive.java",
            "storage.type.token.java",
            "storage.type.groovy",
            "storage.type.annotation.groovy",
            "storage.type.parameters.groovy",
            "storage.type.generic.groovy",
            "storage.type.object.array.groovy",
            "storage.type.primitive.array.groovy",
            "storage.type.primitive.groovy"
        ],
        "settings": {"foreground": "#4ec9b0"}
    },
    {
        "name": "Types declaration and references, TS grammar specific",
        "scope": [
            "meta.type.cast.expr",
            "meta.type.new.expr",
            "support.constant.math",
            "support.constant.dom",
            "support.constant.json",
            "entity.other.inherited-class"
        ],
        "settings": {"foreground": "#4ec9b0"}
    },
    {
        "name": "Control flow keywords",
        "scope": "keyword.control",
        "settings": {"foreground": "#C586C0"}
    },
    {
        "name": "Variable and parameter name",
        "scope": [
            "variable",
            "meta.definition.variable.name",
            "support.variable"
        ],
        "settings": {"foreground": "#9cdcfe"}
    },
    {
        "name": "Object keys, TS grammar specific",
        "scope": [
            "meta.object-literal.key"
            // "meta.object-literal.key entity.name.function"
        ],
        "settings": {"foreground": "#9cdcfe"}
    },
    {
        "scope": "constant.character.escape",
        "settings": {"foreground": "#d7ba7d"}
    },
    {
        "scope": "token.info-token",
        "settings": { "foreground": "#6796e6" }
    },
    {
        "scope": "token.warn-token",
        "settings": { "foreground": "#cd9731" }
    },
    {
        "scope": "token.error-token",
        "settings": { "foreground": "#f44747" }
    },
    {
        "scope": "token.debug-token",
        "settings": { "foreground": "#b267e6" }
    }
]
