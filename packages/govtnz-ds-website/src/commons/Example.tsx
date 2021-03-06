import React, { Component, Fragment } from 'react';
import { Details, Summary } from 'react-accessible-details';
import copyToClipboard from 'copy-text-to-clipboard';
import './styles/clipboard.css';
import iconDown from './svgs/icon-down.svg';
import A from '@govtnz/ds/build/react-ts/A';
import {
  getPreferredFormat,
  SelectExampleFormat,
  highlightCode,
  CodeToName,
} from './code-previews';

type Props = {
  children: React.ReactNode;
  code: AnyObject;
  codeOnly?: boolean | undefined;
};

type State = {
  formatId: string;
  id: string;
  code: string;
  hasClickedExpand: boolean;
  supportsJavaScript: boolean;
  supportsClipboard: boolean;
  copyingMode: false | 'start' | 'end';
};

const DEFAULT_FORMAT_ID = 'html';

export default class Example extends Component<Props, State> {
  props: Props;
  state: State;

  timer?: any;

  constructor(props: Props) {
    super(props);

    const formatId = DEFAULT_FORMAT_ID;
    const rawCode = props.code[formatId];

    this.state = {
      id: `select_${Math.random()
        .toString(36)
        .replace(/[^0-9]/gi, '')}`,
      formatId: formatId,
      code: highlightCode(rawCode, formatId),
      hasClickedExpand: false,
      copyingMode: false,
      supportsJavaScript: false,
      supportsClipboard: true,
    };
  }

  componentDidMount = () => {
    this.resetFormatChoice();
    this.setState({
      supportsJavaScript: true,
    });
  };

  resetFormatChoice = () => {
    const formatId = getPreferredFormat();
    this.changeFormatId(formatId);

    // FIXME: For some reason Prism formatting isn't working sometimes
    // so this is a temporary hack to force re-renders.
    //
    const redrawCode = () => {
      const { formatId } = this.state;
      this.changeFormatId(formatId);
    };
    setTimeout(redrawCode, 250);
    setTimeout(redrawCode, 500);
    setTimeout(redrawCode, 750);
  };

  copyToClipboard = () => {
    const { code } = this.props;
    const { formatId } = this.state;
    const rawCode = code[formatId];
    if (!rawCode) return;
    copyToClipboard(rawCode);
    this.setState({
      copyingMode: false,
    });
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.setState({
        copyingMode: 'start',
      });
      this.timer = setTimeout(() => {
        this.setState({
          copyingMode: 'end',
        });
        this.timer = setTimeout(() => {
          this.setState({
            copyingMode: false,
          });
        }, 10000);
      }, 75);
    }, 75);
    console.log(rawCode);
  };

  resetCopyToClipboard = () => {
    this.setState({
      copyingMode: false,
    });
  };

  clickFormat = () => {
    const { hasClickedExpand } = this.state;
    if (hasClickedExpand) {
      return;
    }
    this.setState({ hasClickedExpand: true });
    this.resetFormatChoice();
  };

  changeFormatId = formatId => {
    this.setState({
      formatId,
      code: highlightCode(this.props.code[formatId], formatId),
    });
  };

  render() {
    const { children, codeOnly, code: allCode } = this.props;
    const {
      id,
      formatId,
      code,
      supportsClipboard,
      supportsJavaScript,
      copyingMode,
    } = this.state;

    const codePreview = (
      <div className="example--bg-off-white">
        {supportsJavaScript && (
          <React.Fragment>
            <div className="example__format">
              <h6 style={{ margin: '0px' }}>
                <label className="example__label" htmlFor={id}>
                  Template format:{' '}
                </label>
                <span className="example__select">
                  <svg
                    className="example__select-icon-down"
                    role="presentation"
                  >
                    <use xlinkHref={`#${iconDown.id}`} />
                  </svg>
                  <SelectExampleFormat
                    id={id}
                    formatId={formatId}
                    onChange={this.changeFormatId}
                  />
                </span>
              </h6>

              {formatId === 'mustache' && (
                <p className="example__note">
                  Please note that our Mustache templates are currently beta
                  quality. We recommend using HTML until we can give you
                  guidance on how to integrate specific technologies. If you
                  wish to see the <code>.mustache</code> template files{' '}
                  <A href="https://github.com/GOVTNZ/govtnz-design-system/tree/master/packages/govtnz-ds/build/mustache">
                    see our GitHub repository
                  </A>{' '}
                  and{' '}
                  <A href="https://github.com/GOVTNZ/govtnz-design-system#mustache">
                    Mustache install docs
                  </A>
                  .
                </p>
              )}

              {formatId === 'silverstripe-components' && (
                <p className="example__note">
                  Please note that our SilverStripe Components are currently
                  alpha quality. We recommend using HTML until we can give you
                  guidance on how to integrate specific technologies. If you
                  wish to see the <code>.ss</code> template files{' '}
                  <A href="https://github.com/GOVTNZ/govtnz-design-system/tree/master/packages/govtnz-ds/build/silverstripe-components">
                    see our GitHub repository
                  </A>{' '}
                  and{' '}
                  <A href="https://github.com/GOVTNZ/govtnz-design-system#silverstripe">
                    SilverStripe install docs
                  </A>
                  .
                </p>
              )}

              {(formatId === 'vue-js' || formatId === 'vue-ts') && (
                <p className="example__note">
                  Please note that our Vue components are currently beta
                  quality. We recommend using HTML until we can give you
                  guidance on how to integrate specific technologies. If you
                  wish to see the <code>.vue</code> template files{' '}
                  <A href="https://github.com/GOVTNZ/govtnz-design-system/tree/master/packages/govtnz-ds/build/vue-js">
                    see our GitHub repository
                  </A>{' '}
                  and{' '}
                  <A href="https://github.com/GOVTNZ/govtnz-design-system#vue">
                    Vue install docs
                  </A>
                  .
                </p>
              )}

              {supportsJavaScript && supportsClipboard ? (
                <div className="clipboard">
                  <div
                    role="alert"
                    className={`clipboard__tooltip${
                      copyingMode ? ` clipboard__tooltip--${copyingMode}` : ''
                    }`}
                  >
                    Copied
                  </div>

                  <button
                    className="clipboard__button"
                    onClick={this.copyToClipboard}
                    type="button"
                  >
                    Copy code
                  </button>
                </div>
              ) : null}
            </div>
            <pre className="language-code example__code">
              <code dangerouslySetInnerHTML={{ __html: code }} />
            </pre>
          </React.Fragment>
        )}
        {Object.keys(allCode).map(codeType => {
          if (!allCode[codeType]) return null;
          return (
            <noscript key={codeType}>
              <h3>{CodeToName[codeType] || codeType}</h3>
              <pre>
                <code>{allCode[codeType]}</code>
              </pre>
            </noscript>
          );
        })}
      </div>
    );

    return (
      <div className="example">
        {!codeOnly && (
          <Fragment>
            <div className="example__visual">{children}</div>
            <Details className="example__details" onChange={this.clickFormat}>
              <Summary className="example__summary">
                <h5 className="example__summary-button">
                  Code
                  <svg
                    className="example__summary-icon-down icon icon--theme-highlight"
                    role="presentation"
                  >
                    <use xlinkHref={`#${iconDown.id}`} />
                  </svg>
                </h5>
              </Summary>
              {codePreview}
            </Details>
          </Fragment>
        )}
        {codeOnly && <Fragment>{codePreview}</Fragment>}
      </div>
    );
  }
}

type AnyObject = {
  [key: string]: string;
};
