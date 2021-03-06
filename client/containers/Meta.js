import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Block } from "jsxstyle";
import Input from "../components/Input";
import { meta } from "../actions/ElementActions";

class Meta extends Component {
  render() {
    const { meta, metaData } = this.props;
    return (
      <Block
        background="white"
        marginRight="43px"
        padding="1rem"
        marginBottom=".5rem"
        borderRadius="2px"
        boxShadow="0 3px 4px 0 rgba(0,0,0,.1)"
      >
        <Block width="100%" marginBottom=".5rem">
          <Input
            placeholder="Newsletter do Criciúma Dev / Edição #1"
            value={metaData.subject}
            onChange={e => meta({ subject: e.target.value })}
            style={{
              width: "100%",
              fontWeight: "bold",
              color: "#141823"
            }}
          />
        </Block>
        <Block marginBottom=".5rem">
          <Input
            rows={2}
            onChange={e => meta({ preheader: e.target.value })}
            placeholder="Guia prático de expressões regulares, Big Data Experience e mais..."
            value={metaData.preheader}
            style={{
              width: "100%",
              color: "#595f6c",
              fontSize: "14px",
              boxSizing: "border-box"
            }}
          />
        </Block>
        <Block>
          <Input
            id="date"
            type="date"
            value={metaData.date}
            onChange={e => meta({ date: e.target.value })}
            style={{ width: "100%", margin: 0, flex: 1 }}
          />
        </Block>
      </Block>
    );
  }
}

function mapStateToProps(state) {
  return { metaData: state.meta };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ meta }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Meta);
