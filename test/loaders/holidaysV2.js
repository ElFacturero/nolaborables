import chai from 'chai';
import _ from 'lodash';
import { holidaysV2 } from '../../src/loaders';
const expect = chai.expect;

describe('#holidaysV2', () => {

  it('must load data of an year for Version 2 of the API', () => {
    let refs = {
      'code01': {
        'motivo': 'Feriado 1',
        'tipo': 'inamovible'
      },
      'code02': {
        'motivo': 'Feriado 2',
        'tipo': 'nolaborable',
        'opcional': 'origen',
        'origen': 'armenia'
      },
      'code03': {
        'motivo': 'Feriado 3',
        'tipo': 'puente'
      },
      'code04': {
        'motivo': 'Feriado 4',
        'tipo': 'nolaborable',
        'opcional': 'religion',
        'religion': 'cristianismo'
      },
      'code05': {
        'motivo': 'Feriado 5',
        'tipo': 'nolaborable',
      	'opcional': 'religion',
      	'religion': 'judaísmo'
      },
      'code06': {
        'motivo': 'Feriado 6',
        'tipo': 'trasladable',
      	'original': '08-04'
      },
      'code07': {
        'motivo': 'Feriado 7',
        'tipo': 'trasladable',
      	'original': '08-04'
      },
      'code08': {
        'motivo': 'Feriado 8',
        'tipo': 'trasladable',
      	'original': '08-04'
      }
    };

    let holidays = [{
      '01': [{ id: 'code01' }, { id: 'code02' }]
    }, {
      '03': { id: 'code03' },
      '12': { id: 'code04' }
    }, {
      '22': { id: 'code05' }
    }, {
      '05': { id: 'code06' },
      '06': { id: 'code06' },
      '07': { id: 'code06' }
    }, {
      '05': { id: 'code08' },
      '06': [{ id: 'code07' }, { id: 'code08' }],
      '07': { id: 'code08' }
    }];

    let expected = [{
      '01': [{ id: 'code01', ...refs['code01'] }, { id: 'code02', ...refs['code02'] }]
    }, {
      '03': { id: 'code03', ...refs['code03'] },
      '12': { id: 'code04', ...refs['code04'] }
    }, {
      '22': { id: 'code05', ...refs['code05'] }
    }, {
      '05': { id: 'code06', ...refs['code06'] },
      '06': { id: 'code06', ...refs['code06'] },
      '07': { id: 'code06', ...refs['code06'] }
    }, {
      '05': { id: 'code08', ...refs['code08'] },
      '06': [{ id: 'code07', ...refs['code07'] }, { id: 'code08', ...refs['code08'] }],
      '07': { id: 'code08', ...refs['code08'] }
    }];

    let result = holidaysV2(holidays, refs);
    expect(result).to.be.an('array');
    expect(result.length).to.be.equal(expected.length);

    expect(_.isEqual(result, expected)).to.be.true;
  });
});
