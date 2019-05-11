function getMailMessages() {
  var condition = 'label:alert---alert@  after:2019/5/7 before:2019/5/14'
  var threads = GmailApp.search(condition);
  var msgs = GmailApp.getMessagesForThreads(threads);
  return msgs
}

function recordToLastCell(text) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  activeLastCell(sheet, 'B')

  var last = sheet.getActiveCell();
  last.setValue(text.getPlainBody());
}

function execute() {
  msgs = getMailMessages();
  msgs.forEach(
    function (e) {
      msgs = e[0]
      recordToLastCell(msgs);
    }
  )
}

// 到達したら、該当のユーザーにメンションして、調査開始
// // アラート来ました。確認お願いします。管理表記表済み。#〇〇
// 障害管理表に起票：slashメッセージで？
/* /set_alert
#〇〇
title
body
baklog_id
... */
// 
