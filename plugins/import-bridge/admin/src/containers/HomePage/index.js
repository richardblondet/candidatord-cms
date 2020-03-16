/*
 *
 * HomePage
 *
 */

import React, { memo, useState, Fragment } from 'react';
// import PropTypes from 'prop-types';
import {HeaderNav, LoadingIndicator, PluginHeader} from 'strapi-helper-plugin';
import {Button, InputNumber, InputText, Label, Select} from '@buffetjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import fetch from 'isomorphic-unfetch';
import pluginId from '../../pluginId';
import { Container, Row, Block } from '../../components';
// const getUrl = to => to ? `/plugins/${pluginId}/${to}` : `/plugins/${pluginId}`;
const pluginUrl = (baseUrl) => (to) => `plugins/${baseUrl}/${to}`;
const goTo = pluginUrl(pluginId);

// console.log(goTo('home'));

const SimpleRestClient = () => {
  const [form, setForm] = useState({ 
    url: 'https://script.google.com/macros/s/AKfycbyyWi5XF3-1P3AeH1SydzbT4AYrHXyVGb5KDO3ys5koef2CngLc/exec?action=read&table=Sheet1',
    method: 'GET'
  });

  const options = ['GET'];

  const updateForm = ( form ) => {
    setForm(form);
  }

  const onFieldChangeHandler = ({ name, value }) => {
    console.log("Change", { name, value });
    let update = {
      ...form,
      [name]: value
    };
    updateForm(update);
  };

  const onSendButtonHandler = ({ preventDefault }) => {
    console.log("Doing something")
    preventDefault();
    if( form.url ){
      fetch( form.url ).then( res => res.json() ).then( result => {
        if( result ) {
          console.log( result );
        }
    });
    }
  };

  return (
    <Row>
      <form>
        <div className={"row"}>
          <div className={"col-sm-4"}>
            <InputText
              key={"url"}
              name={"url"}
              onChange={({ target }) => onFieldChangeHandler( target )}
              placeholder={"Source URL"}
              type={"text"}
              value={form.url}
            />
          </div>
          <div className={"col-sm-2"}>
            <Select
              name={"method"}
              onChange={({ target }) => onFieldChangeHandler( target )}
              options={options}
              value={form.method}
            />
          </div>
        </div>
        <div className={"row mt-3 text-right"}>
          <div className={"col-sm-6 align-self-center"}>
            <Button 
              onClick={onSendButtonHandler}
              color={"primary"} 
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
              >Send</Button>
          </div>
        </div>
      </form>
    </Row>
  );
}

const HomePage = () => {
  const [val, setValue] = useState('');
  
  return (
    <Container className={"container-fluid"}>
        <PluginHeader
          title={"Import Bridge"}
          description={"Import and sync content from a Restful resource"}
        />
        <Row>
          <Block
              title="Sync Data"
              description="Configure the Import Source & Destination"
              style={{marginBottom: 12}}
            >
            <SimpleRestClient />
          </Block>
        </Row>
      </Container>
  );
};

export default memo(HomePage);
