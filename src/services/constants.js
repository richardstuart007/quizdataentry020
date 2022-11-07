//
//  Browser Port (29002) ==> Server REMOTE server
//
//
exports.REMOTE_CLIENT = 'REMOTE:29002'
exports.REMOTE_SERVER = 'REMOTE:Railway'
exports.REMOTE_DATABASE = 'REMOTE:Railway'
exports.REMOTE_SERVERURL = 'https://quizserver010-production.up.railway.app'
//
//  29002 - Local Client --> Remote Server --> Remote Database
//
exports.LOC_REMOTE_REMOTE_CLIENT = 'LOCAL:29002'
//
//  29012 - Local Client --> Local Server --> Remote Database
//
exports.LOC_LOC_REMOTE_CLIENT = 'LOCAL:29012'
exports.LOC_LOC_REMOTE_SERVER = 'LOCAL:29001'
exports.LOC_LOC_REMOTE_SERVERURL = 'http://localhost:29001'
//
//  28002 - Local Client --> Local Server --> Local Database
//
exports.LOC_LOC_LOC_CLIENT = 'LOCAL:28002'
exports.LOC_LOC_LOC_SERVER = 'LOCAL:28001'
exports.LOC_LOC_LOC_DATABASE = 'LOCAL'
exports.LOC_LOC_LOC_SERVERURL = 'http://localhost:28001'
//
//  Tables
//
exports.URL_TABLES = '/QuizTables'
//
//  Other Parameters
//
exports.SQL_ROWS = 2000
exports.VALIDATE_ON_CHANGE = false
