/* eslint max-nested-callbacks: 0 */

import { expect } from 'chai';
import Nightmare from 'nightmare';
import * as util from 'webcube/utils';

describe('job-list', function () {

  this.timeout(60000);
  const rootUrl = util.getUrlRoot();
  const url = `${rootUrl}/job-list/index.html`;

  describe('Start page', function () {

    it('should be mounted', function (done) {
      if (util.isProductionEnv) {
        this.skip();
        return;
      }
      const nightmare = Nightmare({
        show: false,
      });
      nightmare.goto(url).evaluate(function () {
        return document.querySelectorAll('#jobListRoot').length;
      }).end().then(result => {
        expect(result).to.be.equal(1);
        done();
      }).catch(done);
    });

  });

});
