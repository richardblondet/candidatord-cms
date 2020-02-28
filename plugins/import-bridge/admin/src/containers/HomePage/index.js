/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import {HeaderNav, LoadingIndicator, PluginHeader} from 'strapi-helper-plugin'
import pluginId from '../../pluginId';
import { Container, Row } from '../../components';

const getUrl = to => to ? `/plugins/${pluginId}/${to}` : `/plugins/${pluginId}`;

const HomePage = () => {
  return (
    <Container className={"container-fluid"}>
        <PluginHeader
          title={"Import Bridge"}
          description={"Import and sync content from a Google Spreadsheet"}
        />
        <Row>
          <HeaderNav
            links={[
              {
                name: "Sync Data",
                to: getUrl(''),
              }
            ]}
            style={{marginTop: '4.4rem'}}
          />
        </Row>
      </Container>
  );
};

export default memo(HomePage);
