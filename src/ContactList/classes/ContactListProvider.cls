public class ContactListProvider implements ProviderInterface {

  public static String remoteRequest(String methodName, String params) {
    Object result;

    switch on methodName {
      when 'initColumns' {
        result = ContactListService.initColumns();
      }
      when 'getRecords' {
        result = ContactListService.getRecords();
      }
    }

    return JSON.serialize(result);
  }
}