import _ from 'lodash';

export default [
    //{
        //field: 'name',
        //title: 'Title',
        //required: false,
    //},
    {
        field: 'id',
        title: 'Id',
        disabled: data => !_.isNil(data.id),
        display: data => !_.isNil(data.id),
    },
    {
        field: 'pubmedid',
        title: 'PubMed ID',
        required: false,
    },
    {
        field: 'doinumber',
        title: 'DOI number',
        required: false,
    },
    {
        field: 'yearofpublication',
        title: 'Year of publication',
        required: false,
    },
    {
        field: 'aptamertargettype',
        title: 'Aptamer Target Type',
        required: false,
    },
    {
        field: 'aptamertargetname',
        title: 'Aptamer Target Name',
        required: false,
    },
    {
        field: 'aptamersequence',
        title: 'Aptamer Sequence',
        required: false,
    },
    {
        field: 'templatesequence',
        title: 'Template sequence: e.g., GCAATGGTACGGTACTGTC-N40-AATCAGTGCACGCTACTTTGCTAA',
        required: false,
    },
    {
        field: 'lengthofrandomregion',
        title: 'Length of random region',
        required: false,
    },
    {
        field: 'templatebias',
        title: 'Template Bias',
        required: false,
    },
    {
        field: 'selexmethod',
        title: 'SELEX Method',
        //type: 'picklist',
        //options: ['Central Kurdish', 'Northern Kurdish', 'Southern Kurdish', 'Zazaki', 'Gurani', 'Hawrami', 'Laki', 'Badini', 'Other'],
        required: false,
    },


    //{
        //field: 'name',
        //title: 'Title',
        //required: false,
    //},



    {
        field: 'numberofselectionrounds',
        title: 'Number of Selection Rounds',
        //type: 'picklist',
        //options: ['Phonetics/Phonology', 'Morpho', 'syntax', 'Semantics', 'Pragmatics', 'Discourse analysis', 'Psycholinguistics', 'Sociolinguistics', 'Bi-Multilingualism', 'Language acquisition', 'Applied linguistics', 'computer linguistics', 'dialectology', 'mapping Kurdish', 'lexicography / dictionary', 'Policy and planning of Kurdish', 'revitatlization', 'standardization'],
        required: false,
    },
    {
        field: 'separationpartitioningmethod',
        title: 'Separation (Partitioning) Method',
        //type: 'picklist',
        //options: ['Armenia', 'Iran', 'Iraq', 'Turkey', 'Syria', 'Caucasus', 'diaspora', 'other'],
        required: false,
    },
    {
        field: 'elutionrecoverymethod',
        title: 'Elution/Recovery method',
        required: false,
    },
    {
        field: 'selectionsolutionbufferingagent',
        title: 'Selection Solution Buffering Agent',
        required: false,
    },
    {
        field: 'selectionsolutionph',
        title: 'Selection Solution pH',
        required: false,
    },




    {
        field: 'selectionsolutiontemperature',
        title: 'Selection Solution Temperature °C',
        required: false,
    },
    {
        field: 'concentrationkm',
        title: 'Concentration K (M)',
        required: false,
    },
    {
        field: 'concentrationmgm',
        title: 'Concentration Mg (M)',
        required: false,
    },
    {
        field: 'concentrationnam',
        title: 'Concentration Na (M)',
        required: false,
    },
    {
        field: 'concentrationznm',
        title: 'Concentration Zn (M)',
        required: false,
    },
    {
        field: 'concentrationcam',
        title: 'Concentration Ca (M)',
        required: false,
    },
    {
        field: 'concentrationotherm',
        title: 'Concentration Other (M)',
        required: false,
    },
    {
        field: 'affinitymethod',
        title: 'Affinity Method',
        required: false,
    },

    {
        field: 'affinitymethodconditions',
        title: 'Affinity Method Conditions',
        required: false,
    },
    {
        field: 'aptamertype',
        title: 'Aptamer Type',
        required: false,
    },
    {
        field: 'othermodification',
        title: 'Other modification',
        required: false,
    },
    {
        field: 'kdvalueinmolar',
        title: 'KD Value (in Molar)',
        required: false,
    },
    {
        field: 'kderror',
        title: 'KD Error',
        required: false,
    },
    {
        field: 'testedapplicationpurpose',
        title: 'Tested application purpose',
        required: false,
    },
    {
        field: 'mutationalanalysis',
        title: 'Mutational Analysis',
        required: false,
    },
    {
        field: 'minamersyesno',
        title: 'Minamers (yes/no)',
        required: false,
    },
    {
        field: 'minimeronesequence',
        title: 'Minimer 1 sequence',
        required: false,
    },
    {
        field: 'minimeronekd',
        title: 'Minimer 1 Kd',
        required: false,
    },
    {
        field: 'minimertwosequence',
        title: 'Minimer 2 sequence',
        required: false,
    },
    {
        field: 'minimertwokd',
        title: 'Minimer 2 Kd',
        required: false,
    },
    {
        field: 'minimerthreesequence',
        title: 'Minimer 3 sequence',
        required: false,
    },
    {
        field: 'minimerthreekd',
        title: 'Minimer 3 Kd',
        required: false,
    },
    {
        field: 'notes',
        title: 'Notes',
        required: false,
    },
];
