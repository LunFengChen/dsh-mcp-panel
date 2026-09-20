/**
 * Loader `name` values that identify an official MCP client bridge row.
 *
 * xfdsh ships `@x1a0f3n9/dsh-mcp-client`. Generated patches write that name.
 * Rows still using `@deepseek-ai/dsh-mcp-client` stay visible and editable.
 *
 * @module dsh-mcp-panel/client-module
 */

/** Loader `name` written into new mcp-client patch rows. */
export const MCP_CLIENT_MODULE = '@x1a0f3n9/dsh-mcp-client'

/** Official and xfdsh loader names for the same MCP client bridge. */
export const MCP_CLIENT_MODULE_ALIASES = [
  '@x1a0f3n9/dsh-mcp-client',
  '@deepseek-ai/dsh-mcp-client',
] as const

/**
 * Whether a loader row is an official MCP client bridge.
 *
 * @param name - the loader entry `options.name`.
 * @returns true when the row is a first-party mcp-client instance.
 */
export function isMcpClientModule(name: string | undefined): boolean {
  return name === '@x1a0f3n9/dsh-mcp-client' || name === '@deepseek-ai/dsh-mcp-client'
}
