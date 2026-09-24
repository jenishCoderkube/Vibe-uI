import ts from 'typescript'

export function transpileToJs(code: string, isJsx: boolean): string {
  const result = ts.transpileModule(code, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      jsx: isJsx ? ts.JsxEmit.Preserve : ts.JsxEmit.None,
      removeComments: false,
    },
  })
  return result.outputText
}
