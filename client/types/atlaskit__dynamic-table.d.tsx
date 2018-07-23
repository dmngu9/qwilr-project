declare module '@atlaskit/dynamic-table' {
    import * as React from 'react';

    interface Props {
        caption?: React.ReactNode;
        head: object;
        rows: object;
        // tslint:disable-next-line:no-any
        emptyView?: React.ReactElement<any>;
        loadingSpinnerSize?: 'small' | 'large';
        isLoading?: boolean;
        isFixedSize?: boolean;
    }

    export class DynamicTableStateless extends React.Component<Props> {}
}
