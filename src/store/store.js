import {decorate, observable, action} from 'mobx';
import axios from 'axios';

class Store {
  countries = [
    {
      Country: 'Andorra',
      Slug: 'andorra',
      ISO2: 'AD',
    },
    {
      Country: 'Iraq',
      Slug: 'iraq',
      ISO2: 'IQ',
    },
    {
      Country: 'Thailand',
      Slug: 'thailand',
      ISO2: 'TH',
    },
    {
      Country: 'Norway',
      Slug: 'norway',
      ISO2: 'NO',
    },
    {
      Country: 'Switzerland',
      Slug: 'switzerland',
      ISO2: 'CH',
    },
    {
      Country: 'US Minor Outlying Islands',
      Slug: 'us-minor-outlying-islands',
      ISO2: 'UM',
    },
    {
      Country: 'Brunei Darussalam',
      Slug: 'brunei',
      ISO2: 'BN',
    },
    {
      Country: 'Namibia',
      Slug: 'namibia',
      ISO2: 'NA',
    },
    {
      Country: 'Northern Mariana Islands',
      Slug: 'northern-mariana-islands',
      ISO2: 'MP',
    },
    {
      Country: 'Dominican Republic',
      Slug: 'dominican-republic',
      ISO2: 'DO',
    },
    {
      Country: 'Puerto Rico',
      Slug: 'puerto-rico',
      ISO2: 'PR',
    },
    {
      Country: 'Western Sahara',
      Slug: 'western-sahara',
      ISO2: 'EH',
    },
    {
      Country: 'Azerbaijan',
      Slug: 'azerbaijan',
      ISO2: 'AZ',
    },
    {
      Country: 'Faroe Islands',
      Slug: 'faroe-islands',
      ISO2: 'FO',
    },
    {
      Country: 'Jersey',
      Slug: 'jersey',
      ISO2: 'JE',
    },
    {
      Country: 'Uruguay',
      Slug: 'uruguay',
      ISO2: 'UY',
    },
    {
      Country: 'Bolivia',
      Slug: 'bolivia',
      ISO2: 'BO',
    },
    {
      Country: 'Cocos (Keeling) Islands',
      Slug: 'cocos-keeling-islands',
      ISO2: 'CC',
    },
    {
      Country: 'Bermuda',
      Slug: 'bermuda',
      ISO2: 'BM',
    },
    {
      Country: 'Malta',
      Slug: 'malta',
      ISO2: 'MT',
    },
    {
      Country: 'Mayotte',
      Slug: 'mayotte',
      ISO2: 'YT',
    },
    {
      Country: 'Ethiopia',
      Slug: 'ethiopia',
      ISO2: 'ET',
    },
    {
      Country: 'Nicaragua',
      Slug: 'nicaragua',
      ISO2: 'NI',
    },
    {
      Country: 'South Georgia and the South Sandwich Islands',
      Slug: 'south-georgia-and-the-south-sandwich-islands',
      ISO2: 'GS',
    },
    {
      Country: 'Taiwan, Republic of China',
      Slug: 'taiwan',
      ISO2: 'TW',
    },
    {
      Country: 'Maldives',
      Slug: 'maldives',
      ISO2: 'MV',
    },
    {
      Country: 'Moldova',
      Slug: 'moldova',
      ISO2: 'MD',
    },
    {
      Country: 'Monaco',
      Slug: 'monaco',
      ISO2: 'MC',
    },
    {
      Country: 'Senegal',
      Slug: 'senegal',
      ISO2: 'SN',
    },
    {
      Country: 'Serbia',
      Slug: 'serbia',
      ISO2: 'RS',
    },
    {
      Country: 'Guatemala',
      Slug: 'guatemala',
      ISO2: 'GT',
    },
    {
      Country: 'Suriname',
      Slug: 'suriname',
      ISO2: 'SR',
    },
    {
      Country: 'Antigua and Barbuda',
      Slug: 'antigua-and-barbuda',
      ISO2: 'AG',
    },
    {
      Country: 'Saint Lucia',
      Slug: 'saint-lucia',
      ISO2: 'LC',
    },
    {
      Country: 'Wallis and Futuna Islands',
      Slug: 'wallis-and-futuna-islands',
      ISO2: 'WF',
    },
    {
      Country: 'Ireland',
      Slug: 'ireland',
      ISO2: 'IE',
    },
    {
      Country: 'Korea (South)',
      Slug: 'korea-south',
      ISO2: 'KR',
    },
    {
      Country: 'Saint Vincent and Grenadines',
      Slug: 'saint-vincent-and-the-grenadines',
      ISO2: 'VC',
    },
    {
      Country: 'Antarctica',
      Slug: 'antarctica',
      ISO2: 'AQ',
    },
    {
      Country: 'Bosnia and Herzegovina',
      Slug: 'bosnia-and-herzegovina',
      ISO2: 'BA',
    },
    {
      Country: 'Gambia',
      Slug: 'gambia',
      ISO2: 'GM',
    },
    {
      Country: 'Guadeloupe',
      Slug: 'guadeloupe',
      ISO2: 'GP',
    },
    {
      Country: 'Saint-Martin (French part)',
      Slug: 'saint-martin-french-part',
      ISO2: 'MF',
    },
    {
      Country: 'ALA Aland Islands',
      Slug: 'ala-aland-islands',
      ISO2: 'AX',
    },
    {
      Country: 'Argentina',
      Slug: 'argentina',
      ISO2: 'AR',
    },
    {
      Country: 'Iran, Islamic Republic of',
      Slug: 'iran',
      ISO2: 'IR',
    },
    {
      Country: 'Luxembourg',
      Slug: 'luxembourg',
      ISO2: 'LU',
    },
    {
      Country: 'Bahrain',
      Slug: 'bahrain',
      ISO2: 'BH',
    },
    {
      Country: 'Estonia',
      Slug: 'estonia',
      ISO2: 'EE',
    },
    {
      Country: 'Paraguay',
      Slug: 'paraguay',
      ISO2: 'PY',
    },
    {
      Country: 'Central African Republic',
      Slug: 'central-african-republic',
      ISO2: 'CF',
    },
    {
      Country: 'Guinea-Bissau',
      Slug: 'guinea-bissau',
      ISO2: 'GW',
    },
    {
      Country: 'Malawi',
      Slug: 'malawi',
      ISO2: 'MW',
    },
    {
      Country: 'Ukraine',
      Slug: 'ukraine',
      ISO2: 'UA',
    },
    {
      Country: 'Yemen',
      Slug: 'yemen',
      ISO2: 'YE',
    },
    {
      Country: 'Botswana',
      Slug: 'botswana',
      ISO2: 'BW',
    },
    {
      Country: 'Bouvet Island',
      Slug: 'bouvet-island',
      ISO2: 'BV',
    },
    {
      Country: 'Mongolia',
      Slug: 'mongolia',
      ISO2: 'MN',
    },
    {
      Country: 'Rwanda',
      Slug: 'rwanda',
      ISO2: 'RW',
    },
    {
      Country: 'Burkina Faso',
      Slug: 'burkina-faso',
      ISO2: 'BF',
    },
    {
      Country: 'Fiji',
      Slug: 'fiji',
      ISO2: 'FJ',
    },
    {
      Country: 'Holy See (Vatican City State)',
      Slug: 'holy-see-vatican-city-state',
      ISO2: 'VA',
    },
    {
      Country: 'India',
      Slug: 'india',
      ISO2: 'IN',
    },
    {
      Country: 'Kuwait',
      Slug: 'kuwait',
      ISO2: 'KW',
    },
    {
      Country: 'Algeria',
      Slug: 'algeria',
      ISO2: 'DZ',
    },
    {
      Country: 'Belgium',
      Slug: 'belgium',
      ISO2: 'BE',
    },
    {
      Country: 'Zimbabwe',
      Slug: 'zimbabwe',
      ISO2: 'ZW',
    },
    {
      Country: 'Guyana',
      Slug: 'guyana',
      ISO2: 'GY',
    },
    {
      Country: 'Sudan',
      Slug: 'sudan',
      ISO2: 'SD',
    },
    {
      Country: 'Aruba',
      Slug: 'aruba',
      ISO2: 'AW',
    },
    {
      Country: 'Equatorial Guinea',
      Slug: 'equatorial-guinea',
      ISO2: 'GQ',
    },
    {
      Country: 'Myanmar',
      Slug: 'myanmar',
      ISO2: 'MM',
    },
    {
      Country: 'Panama',
      Slug: 'panama',
      ISO2: 'PA',
    },
    {
      Country: 'Cyprus',
      Slug: 'cyprus',
      ISO2: 'CY',
    },
    {
      Country: 'Italy',
      Slug: 'italy',
      ISO2: 'IT',
    },
    {
      Country: 'Republic of Kosovo',
      Slug: 'kosovo',
      ISO2: 'XK',
    },
    {
      Country: 'Tanzania, United Republic of',
      Slug: 'tanzania',
      ISO2: 'TZ',
    },
    {
      Country: 'Georgia',
      Slug: 'georgia',
      ISO2: 'GE',
    },
    {
      Country: 'Ghana',
      Slug: 'ghana',
      ISO2: 'GH',
    },
    {
      Country: 'Greece',
      Slug: 'greece',
      ISO2: 'GR',
    },
    {
      Country: 'French Polynesia',
      Slug: 'french-polynesia',
      ISO2: 'PF',
    },
    {
      Country: 'Russian Federation',
      Slug: 'russia',
      ISO2: 'RU',
    },
    {
      Country: 'Tokelau',
      Slug: 'tokelau',
      ISO2: 'TK',
    },
    {
      Country: 'Austria',
      Slug: 'austria',
      ISO2: 'AT',
    },
    {
      Country: 'Barbados',
      Slug: 'barbados',
      ISO2: 'BB',
    },
    {
      Country: 'Cambodia',
      Slug: 'cambodia',
      ISO2: 'KH',
    },
    {
      Country: 'Falkland Islands (Malvinas)',
      Slug: 'falkland-islands-malvinas',
      ISO2: 'FK',
    },
    {
      Country: 'Mauritius',
      Slug: 'mauritius',
      ISO2: 'MU',
    },
    {
      Country: 'Uzbekistan',
      Slug: 'uzbekistan',
      ISO2: 'UZ',
    },
    {
      Country: 'Canada',
      Slug: 'canada',
      ISO2: 'CA',
    },
    {
      Country: 'Montserrat',
      Slug: 'montserrat',
      ISO2: 'MS',
    },
    {
      Country: 'Pitcairn',
      Slug: 'pitcairn',
      ISO2: 'PN',
    },
    {
      Country: 'Cuba',
      Slug: 'cuba',
      ISO2: 'CU',
    },
    {
      Country: 'Micronesia, Federated States of',
      Slug: 'micronesia',
      ISO2: 'FM',
    },
    {
      Country: 'United Arab Emirates',
      Slug: 'united-arab-emirates',
      ISO2: 'AE',
    },
    {
      Country: 'British Virgin Islands',
      Slug: 'british-virgin-islands',
      ISO2: 'VG',
    },
    {
      Country: 'Bulgaria',
      Slug: 'bulgaria',
      ISO2: 'BG',
    },
    {
      Country: 'Comoros',
      Slug: 'comoros',
      ISO2: 'KM',
    },
    {
      Country: 'Netherlands Antilles',
      Slug: 'netherlands-antilles',
      ISO2: 'AN',
    },
    {
      Country: 'Philippines',
      Slug: 'philippines',
      ISO2: 'PH',
    },
    {
      Country: 'Angola',
      Slug: 'angola',
      ISO2: 'AO',
    },
    {
      Country: 'Benin',
      Slug: 'benin',
      ISO2: 'BJ',
    },
    {
      Country: 'Macedonia, Republic of',
      Slug: 'macedonia',
      ISO2: 'MK',
    },
    {
      Country: 'Niger',
      Slug: 'niger',
      ISO2: 'NE',
    },
    {
      Country: 'Sweden',
      Slug: 'sweden',
      ISO2: 'SE',
    },
    {
      Country: 'Netherlands',
      Slug: 'netherlands',
      ISO2: 'NL',
    },
    {
      Country: 'Saint-Barthélemy',
      Slug: 'saint-barthélemy',
      ISO2: 'BL',
    },
    {
      Country: 'Haiti',
      Slug: 'haiti',
      ISO2: 'HT',
    },
    {
      Country: 'Hong Kong, SAR China',
      Slug: 'hong-kong-sar-china',
      ISO2: 'HK',
    },
    {
      Country: 'Turkmenistan',
      Slug: 'turkmenistan',
      ISO2: 'TM',
    },
    {
      Country: 'Viet Nam',
      Slug: 'vietnam',
      ISO2: 'VN',
    },
    {
      Country: 'Swaziland',
      Slug: 'swaziland',
      ISO2: 'SZ',
    },
    {
      Country: 'Belarus',
      Slug: 'belarus',
      ISO2: 'BY',
    },
    {
      Country: 'Gabon',
      Slug: 'gabon',
      ISO2: 'GA',
    },
    {
      Country: 'Madagascar',
      Slug: 'madagascar',
      ISO2: 'MG',
    },
    {
      Country: 'Papua New Guinea',
      Slug: 'papua-new-guinea',
      ISO2: 'PG',
    },
    {
      Country: 'France',
      Slug: 'france',
      ISO2: 'FR',
    },
    {
      Country: 'Trinidad and Tobago',
      Slug: 'trinidad-and-tobago',
      ISO2: 'TT',
    },
    {
      Country: 'Congo (Kinshasa)',
      Slug: 'congo-kinshasa',
      ISO2: 'CD',
    },
    {
      Country: 'Indonesia',
      Slug: 'indonesia',
      ISO2: 'ID',
    },
    {
      Country: 'Jamaica',
      Slug: 'jamaica',
      ISO2: 'JM',
    },
    {
      Country: 'Lithuania',
      Slug: 'lithuania',
      ISO2: 'LT',
    },
    {
      Country: 'Tonga',
      Slug: 'tonga',
      ISO2: 'TO',
    },
    {
      Country: 'Czech Republic',
      Slug: 'czech-republic',
      ISO2: 'CZ',
    },
    {
      Country: 'Egypt',
      Slug: 'egypt',
      ISO2: 'EG',
    },
    {
      Country: 'Korea (North)',
      Slug: 'korea-north',
      ISO2: 'KP',
    },
    {
      Country: 'United States of America',
      Slug: 'united-states',
      ISO2: 'US',
    },
    {
      Country: 'Poland',
      Slug: 'poland',
      ISO2: 'PL',
    },
    {
      Country: 'Saudi Arabia',
      Slug: 'saudi-arabia',
      ISO2: 'SA',
    },
    {
      Country: 'Tajikistan',
      Slug: 'tajikistan',
      ISO2: 'TJ',
    },
    {
      Country: 'Bangladesh',
      Slug: 'bangladesh',
      ISO2: 'BD',
    },
    {
      Country: 'Belize',
      Slug: 'belize',
      ISO2: 'BZ',
    },
    {
      Country: 'Libya',
      Slug: 'libya',
      ISO2: 'LY',
    },
    {
      Country: 'Mauritania',
      Slug: 'mauritania',
      ISO2: 'MR',
    },
    {
      Country: 'Uganda',
      Slug: 'uganda',
      ISO2: 'UG',
    },
    {
      Country: 'Colombia',
      Slug: 'colombia',
      ISO2: 'CO',
    },
    {
      Country: 'New Caledonia',
      Slug: 'new-caledonia',
      ISO2: 'NC',
    },
    {
      Country: 'Svalbard and Jan Mayen Islands',
      Slug: 'svalbard-and-jan-mayen-islands',
      ISO2: 'SJ',
    },
    {
      Country: 'Bahamas',
      Slug: 'bahamas',
      ISO2: 'BS',
    },
    {
      Country: 'Eritrea',
      Slug: 'eritrea',
      ISO2: 'ER',
    },
    {
      Country: 'Liberia',
      Slug: 'liberia',
      ISO2: 'LR',
    },
    {
      Country: 'Montenegro',
      Slug: 'montenegro',
      ISO2: 'ME',
    },
    {
      Country: 'Oman',
      Slug: 'oman',
      ISO2: 'OM',
    },
    {
      Country: 'Romania',
      Slug: 'romania',
      ISO2: 'RO',
    },
    {
      Country: 'Réunion',
      Slug: 'réunion',
      ISO2: 'RE',
    },
    {
      Country: 'Cape Verde',
      Slug: 'cape-verde',
      ISO2: 'CV',
    },
    {
      Country: 'Djibouti',
      Slug: 'djibouti',
      ISO2: 'DJ',
    },
    {
      Country: 'El Salvador',
      Slug: 'el-salvador',
      ISO2: 'SV',
    },
    {
      Country: 'Nepal',
      Slug: 'nepal',
      ISO2: 'NP',
    },
    {
      Country: 'Norfolk Island',
      Slug: 'norfolk-island',
      ISO2: 'NF',
    },
    {
      Country: 'Somalia',
      Slug: 'somalia',
      ISO2: 'SO',
    },
    {
      Country: 'Spain',
      Slug: 'spain',
      ISO2: 'ES',
    },
    {
      Country: 'Sri Lanka',
      Slug: 'sri-lanka',
      ISO2: 'LK',
    },
    {
      Country: 'Turkey',
      Slug: 'turkey',
      ISO2: 'TR',
    },
    {
      Country: 'Albania',
      Slug: 'albania',
      ISO2: 'AL',
    },
    {
      Country: 'Croatia',
      Slug: 'croatia',
      ISO2: 'HR',
    },
    {
      Country: 'Pakistan',
      Slug: 'pakistan',
      ISO2: 'PK',
    },
    {
      Country: 'Israel',
      Slug: 'israel',
      ISO2: 'IL',
    },
    {
      Country: 'Lao PDR',
      Slug: 'lao-pdr',
      ISO2: 'LA',
    },
    {
      Country: 'Martinique',
      Slug: 'martinique',
      ISO2: 'MQ',
    },
    {
      Country: 'Chile',
      Slug: 'chile',
      ISO2: 'CL',
    },
    {
      Country: 'Finland',
      Slug: 'finland',
      ISO2: 'FI',
    },
    {
      Country: 'Hungary',
      Slug: 'hungary',
      ISO2: 'HU',
    },
    {
      Country: 'Iceland',
      Slug: 'iceland',
      ISO2: 'IS',
    },
    {
      Country: 'Vanuatu',
      Slug: 'vanuatu',
      ISO2: 'VU',
    },
    {
      Country: 'Costa Rica',
      Slug: 'costa-rica',
      ISO2: 'CR',
    },
    {
      Country: 'Seychelles',
      Slug: 'seychelles',
      ISO2: 'SC',
    },
    {
      Country: 'Kiribati',
      Slug: 'kiribati',
      ISO2: 'KI',
    },
    {
      Country: 'Macao, SAR China',
      Slug: 'macao-sar-china',
      ISO2: 'MO',
    },
    {
      Country: 'Honduras',
      Slug: 'honduras',
      ISO2: 'HN',
    },
    {
      Country: 'Mali',
      Slug: 'mali',
      ISO2: 'ML',
    },
    {
      Country: 'Nigeria',
      Slug: 'nigeria',
      ISO2: 'NG',
    },
    {
      Country: 'Saint Pierre and Miquelon',
      Slug: 'saint-pierre-and-miquelon',
      ISO2: 'PM',
    },
    {
      Country: 'Cayman Islands',
      Slug: 'cayman-islands',
      ISO2: 'KY',
    },
    {
      Country: 'Samoa',
      Slug: 'samoa',
      ISO2: 'WS',
    },
    {
      Country: 'Zambia',
      Slug: 'zambia',
      ISO2: 'ZM',
    },
    {
      Country: 'Brazil',
      Slug: 'brazil',
      ISO2: 'BR',
    },
    {
      Country: 'Qatar',
      Slug: 'qatar',
      ISO2: 'QA',
    },
    {
      Country: 'Tuvalu',
      Slug: 'tuvalu',
      ISO2: 'TV',
    },
    {
      Country: 'Venezuela (Bolivarian Republic)',
      Slug: 'venezuela',
      ISO2: 'VE',
    },
    {
      Country: 'Morocco',
      Slug: 'morocco',
      ISO2: 'MA',
    },
    {
      Country: 'Peru',
      Slug: 'peru',
      ISO2: 'PE',
    },
    {
      Country: 'Solomon Islands',
      Slug: 'solomon-islands',
      ISO2: 'SB',
    },
    {
      Country: 'Togo',
      Slug: 'togo',
      ISO2: 'TG',
    },
    {
      Country: 'Mozambique',
      Slug: 'mozambique',
      ISO2: 'MZ',
    },
    {
      Country: 'Palestinian Territory',
      Slug: 'palestine',
      ISO2: 'PS',
    },
    {
      Country: 'Timor-Leste',
      Slug: 'timor-leste',
      ISO2: 'TL',
    },
    {
      Country: 'American Samoa',
      Slug: 'american-samoa',
      ISO2: 'AS',
    },
    {
      Country: 'Bhutan',
      Slug: 'bhutan',
      ISO2: 'BT',
    },
    {
      Country: 'Grenada',
      Slug: 'grenada',
      ISO2: 'GD',
    },
    {
      Country: 'Guernsey',
      Slug: 'guernsey',
      ISO2: 'GG',
    },
    {
      Country: 'Isle of Man',
      Slug: 'isle-of-man',
      ISO2: 'IM',
    },
    {
      Country: 'Chad',
      Slug: 'chad',
      ISO2: 'TD',
    },
    {
      Country: 'Denmark',
      Slug: 'denmark',
      ISO2: 'DK',
    },
    {
      Country: 'Kyrgyzstan',
      Slug: 'kyrgyzstan',
      ISO2: 'KG',
    },
    {
      Country: 'Palau',
      Slug: 'palau',
      ISO2: 'PW',
    },
    {
      Country: 'Singapore',
      Slug: 'singapore',
      ISO2: 'SG',
    },
    {
      Country: 'Christmas Island',
      Slug: 'christmas-island',
      ISO2: 'CX',
    },
    {
      Country: 'Kenya',
      Slug: 'kenya',
      ISO2: 'KE',
    },
    {
      Country: 'Heard and Mcdonald Islands',
      Slug: 'heard-and-mcdonald-islands',
      ISO2: 'HM',
    },
    {
      Country: 'Japan',
      Slug: 'japan',
      ISO2: 'JP',
    },
    {
      Country: 'Niue',
      Slug: 'niue',
      ISO2: 'NU',
    },
    {
      Country: 'Sao Tome and Principe',
      Slug: 'sao-tome-and-principe',
      ISO2: 'ST',
    },
    {
      Country: 'French Guiana',
      Slug: 'french-guiana',
      ISO2: 'GF',
    },
    {
      Country: 'Kazakhstan',
      Slug: 'kazakhstan',
      ISO2: 'KZ',
    },
    {
      Country: 'Lebanon',
      Slug: 'lebanon',
      ISO2: 'LB',
    },
    {
      Country: 'Liechtenstein',
      Slug: 'liechtenstein',
      ISO2: 'LI',
    },
    {
      Country: 'Ecuador',
      Slug: 'ecuador',
      ISO2: 'EC',
    },
    {
      Country: 'Greenland',
      Slug: 'greenland',
      ISO2: 'GL',
    },
    {
      Country: 'Slovenia',
      Slug: 'slovenia',
      ISO2: 'SI',
    },
    {
      Country: 'British Indian Ocean Territory',
      Slug: 'british-indian-ocean-territory',
      ISO2: 'IO',
    },
    {
      Country: 'French Southern Territories',
      Slug: 'french-southern-territories',
      ISO2: 'TF',
    },
    {
      Country: 'Cameroon',
      Slug: 'cameroon',
      ISO2: 'CM',
    },
    {
      Country: 'China',
      Slug: 'china',
      ISO2: 'CN',
    },
    {
      Country: 'Cook Islands',
      Slug: 'cook-islands',
      ISO2: 'CK',
    },
    {
      Country: 'United Kingdom',
      Slug: 'united-kingdom',
      ISO2: 'GB',
    },
    {
      Country: 'Germany',
      Slug: 'germany',
      ISO2: 'DE',
    },
    {
      Country: 'South Africa',
      Slug: 'south-africa',
      ISO2: 'ZA',
    },
    {
      Country: 'South Sudan',
      Slug: 'south-sudan',
      ISO2: 'SS',
    },
    {
      Country: 'San Marino',
      Slug: 'san-marino',
      ISO2: 'SM',
    },
    {
      Country: 'Nauru',
      Slug: 'nauru',
      ISO2: 'NR',
    },
    {
      Country: 'Turks and Caicos Islands',
      Slug: 'turks-and-caicos-islands',
      ISO2: 'TC',
    },
    {
      Country: 'Congo (Brazzaville)',
      Slug: 'congo-brazzaville',
      ISO2: 'CG',
    },
    {
      Country: 'Guinea',
      Slug: 'guinea',
      ISO2: 'GN',
    },
    {
      Country: 'Jordan',
      Slug: 'jordan',
      ISO2: 'JO',
    },
    {
      Country: 'Lesotho',
      Slug: 'lesotho',
      ISO2: 'LS',
    },
    {
      Country: 'Mexico',
      Slug: 'mexico',
      ISO2: 'MX',
    },
    {
      Country: 'Armenia',
      Slug: 'armenia',
      ISO2: 'AM',
    },
    {
      Country: "Côte d'Ivoire",
      Slug: 'cote-divoire',
      ISO2: 'CI',
    },
    {
      Country: 'Latvia',
      Slug: 'latvia',
      ISO2: 'LV',
    },
    {
      Country: 'Saint Kitts and Nevis',
      Slug: 'saint-kitts-and-nevis',
      ISO2: 'KN',
    },
    {
      Country: 'Sierra Leone',
      Slug: 'sierra-leone',
      ISO2: 'SL',
    },
    {
      Country: 'Anguilla',
      Slug: 'anguilla',
      ISO2: 'AI',
    },
    {
      Country: 'Gibraltar',
      Slug: 'gibraltar',
      ISO2: 'GI',
    },
    {
      Country: 'Guam',
      Slug: 'guam',
      ISO2: 'GU',
    },
    {
      Country: 'Marshall Islands',
      Slug: 'marshall-islands',
      ISO2: 'MH',
    },
    {
      Country: 'Portugal',
      Slug: 'portugal',
      ISO2: 'PT',
    },
    {
      Country: 'Saint Helena',
      Slug: 'saint-helena',
      ISO2: 'SH',
    },
    {
      Country: 'Slovakia',
      Slug: 'slovakia',
      ISO2: 'SK',
    },
    {
      Country: 'Afghanistan',
      Slug: 'afghanistan',
      ISO2: 'AF',
    },
    {
      Country: 'Dominica',
      Slug: 'dominica',
      ISO2: 'DM',
    },
    {
      Country: 'Malaysia',
      Slug: 'malaysia',
      ISO2: 'MY',
    },
    {
      Country: 'New Zealand',
      Slug: 'new-zealand',
      ISO2: 'NZ',
    },
    {
      Country: 'Syrian Arab Republic (Syria)',
      Slug: 'syria',
      ISO2: 'SY',
    },
    {
      Country: 'Tunisia',
      Slug: 'tunisia',
      ISO2: 'TN',
    },
    {
      Country: 'Virgin Islands, US',
      Slug: 'virgin-islands',
      ISO2: 'VI',
    },
    {
      Country: 'Australia',
      Slug: 'australia',
      ISO2: 'AU',
    },
    {
      Country: 'Burundi',
      Slug: 'burundi',
      ISO2: 'BI',
    },
  ];
  globalCase = [];
  lCase = {};
  loading = false;
  cases = {};

  getCases = () => {
    this.loading = true;

    axios({
      method: 'get',
      url: `https://api.covid19api.com/summary`,
      timeout: 20000,
    })
      .then((res) => {
        this.globalCase = res.data.Global;
        this.lCase = res.data.Countries[123];
        this.cases = res.data.Countries;
        this.loading = false;
        
      })
      .catch((e) => {
        this.loading = false;
        console.log(e);
      });
  };

  getCountries = () => {
    axios({
      method: 'get',
      url: `https://api.covid19api.com/countries`,
      timeout: 20000,
    })
      .then((res) => {
        this.countires = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  };
}
decorate(Store, {
  cases: observable,
  lCase: observable,
  globalCase: observable,
  countries: observable,
  loading: observable,
  getCountries: action,
  getCases: action,
});
export default new Store();
