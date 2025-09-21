import * as path from 'path';
import { ExtensionContext, window, workspace } from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  const serverModule = context.asAbsolutePath(
    path.join('out', 'server', 'server.js')
  );

  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: { execArgv: ['--nolazy', '--inspect=6009'] }
    }
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [
      { scheme: 'file', language: 'html' },
      { scheme: 'file', language: 'astro' }
    ],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher('**/*.{html,astro}')
    }
  };

  client = new LanguageClient(
    'alpineLsp',
    'Alpine.js Language Server',
    serverOptions,
    clientOptions
  );

  client.start();
  console.log('Alpine.js LSP is active');
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}