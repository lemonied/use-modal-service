import type React from 'react';
import * as ReactDOM from 'react-dom';

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = ReactDOM as any;
  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}

export function render(container: Element | DocumentFragment, children: React.ReactElement) {
  const reactVersion = ReactDOM.version;
  const majorVersion = parseInt(reactVersion.split('.')[0], 10);

  if (majorVersion < 18) {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(children, container);
    return () => {
      // eslint-disable-next-line react/no-deprecated
      ReactDOM.unmountComponentAtNode(container);
    };
  } else {
    toggleWarning(true);
    const root = (ReactDOM as any).createRoot(container);
    toggleWarning(false);
    root.render(children);
    return () => root.unmount();
  }
}
