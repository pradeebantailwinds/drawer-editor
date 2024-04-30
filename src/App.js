// import React, { useState } from 'react';
// import DrawerEditor from './DrawerEditor'; // Assuming this is the path to your DrawerEditor component

// const App = () => {
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [base64Content, setBase64Content] = useState('');

//   // Function to handle opening the drawer
//   const handleOpenDrawer = (content) => {
//     setDrawerVisible(true);
//     setBase64Content(content);
//   };

//   // Function to handle closing the drawer
//   const handleCloseDrawer = () => {
//     setDrawerVisible(false);
//     setBase64Content('');
//   };

//   return (
//     <div>
//       <button type="primary" onClick={() => handleOpenDrawer('IyMgbmdpbnggY29uZmlndXJhdGlvbgojIyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9rdWJlcm5ldGVzL2luZ3Jlc3MvYmxvYi9tYXN0ZXIvY29udHJvbGxlcnMvbmdpbngvY29uZmlndXJhdGlvbi5tZAojIwpjb250cm9sbGVyOgogIG5hbWU6IGNvbnRyb2xsZXIKICBpbWFnZToKICAgIHJlcG9zaXRvcnk6IGs4cy5nY3IuaW8vaW5ncmVzcy1uZ2lueC9jb250cm9sbGVyCiAgICB0YWc6ICJ2MS4zLjAiCiAgICBwdWxsUG9saWN5OiBJZk5vdFByZXNlbnQKICAgICMgd3d3LWRhdGEgLT4gdWlkIDEwMQogICAgcnVuQXNVc2VyOiAxMDEKICAgIGFsbG93UHJpdmlsZWdlRXNjYWxhdGlvbjogdHJ1ZQoKICAjIFRoaXMgd2lsbCBmaXggdGhlIGlzc3VlIG9mIEhQQSBub3QgYmVpbmcgYWJsZSB0byByZWFkIHRoZSBtZXRyaWNzLgogICMgTm90ZSB0aGF0IGlmIHlvdSBlbmFibGUgaXQgZm9yIGV4aXN0aW5nIGRlcGxveW1lbnRzLCBpdCB3b24ndCB3b3JrIGFzIHRoZSBsYWJlbHMgYXJlIGltbXV0YWJsZS4KICAjIFdlIHJlY29tbWVuZCBzZXR0aW5nIHRoaXMgdG8gdHJ1ZSBmb3IgbmV3IGRlcGxveW1lbnRzLgogIHVzZUNvbXBvbmVudExhYmVsOiBmYWxzZQoKICAjIE92ZXJyaWRlIGNvbXBvbmVudCBsYWJlbCBrZXkKICAjIGNvbXBvbmVudExhYmVsS2V5T3ZlcnJpZGU6CgogICMgQ29uZmlndXJlcyB0aGUgcG9ydHMgdGhlIG5naW54LWNvbnRyb2xsZXIgbGlzdGVucyBvbgogIGNvbnRhaW5lclBvcnQ6CiAgICBodHRwOiA4MAogICAgaHR0cHM6IDQ0MwoKICAjIFdpbGwgYWRkIGN1c3RvbSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gTmdpbnggaHR0cHM6Ly9rdWJlcm5ldGVzLmdpdGh1Yi5pby9pbmdyZXNzLW5naW54L3VzZXItZ3VpZGUvbmdpbngtY29uZmlndXJhdGlvbi9jb25maWdtYXAvCiAgY29uZmlnOiB7fQoKICAjIE1heG1pbmQgbGljZW5zZSBrZXkgdG8gZG93bmxvYWQgR2VvTGl0ZTIgRGF0YWJhc2VzCiAgIyBodHRwczovL2Jsb2cubWF4bWluZC5jb20vMjAxOS8xMi8xOC9zaWduaWZpY2FudC1jaGFuZ2VzLXRvLWFjY2Vzc2luZy1hbmQtdXNpbmctZ2VvbGl0ZTItZGF0YWJhc2VzCiAgbWF4bWluZExpY2Vuc2VLZXk6ICIiCgogICMgV2lsbCBhZGQgY3VzdG9tIGhlYWRlcnMgYmVmb3JlIHNlbmRpbmcgdHJhZmZpYyB0byBiYWNrZW5kcyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9naXRodWIuY29tL2t1YmVybmV0ZXMvaW5ncmVzcy1uZ2lueC90cmVlL21hc3Rlci9kb2NzL2V4YW1wbGVzL2N1c3RvbWl6YXRpb24vY3VzdG9tLWhlYWRlcnMKICBwcm94eVNldEhlYWRlcnM6IHt9CgogICMgV2lsbCBhZGQgY3VzdG9tIGhlYWRlcnMgYmVmb3JlIHNlbmRpbmcgcmVzcG9uc2UgdHJhZmZpYyB0byB0aGUgY2xpZW50IGFjY29yZGluZyB0bzogaHR0cHM6Ly9rdWJlcm5ldGVzLmdpdGh1Yi5pby9pbmdyZXNzLW5naW54L3VzZXItZ3VpZGUvbmdpbngtY29uZmlndXJhdGlvbi9jb25maWdtYXAvI2FkZC1oZWFkZXJzCiAgYWRkSGVhZGVyczoge30KCiAgIyBSZXF1aXJlZCBmb3IgdXNlIHdpdGggQ05JIGJhc2VkIGt1YmVybmV0ZXMgaW5zdGFsbGF0aW9ucyAoc3VjaCBhcyBvbmVzIHNldCB1cCBieSBrdWJlYWRtKSwKICAjIHNpbmNlIENOSSBhbmQgaG9zdHBvcnQgZG9uJ3QgbWl4IHlldC4gQ2FuIGJlIGRlcHJlY2F0ZWQgb25jZSBodHRwczovL2dpdGh1Yi5jb20va3ViZXJuZXRlcy9rdWJlcm5ldGVzL2lzc3Vlcy8yMzkyMAogICMgaXMgbWVyZ2VkCiAgaG9zdE5ldHdvcms6IGZhbHNlCgogICMgT3B0aW9uYWxseSBjdXN0b21pemUgdGhlIHBvZCBkbnNDb25maWcuCiAgZG5zQ29uZmlnOiB7fQoKICAjIE9wdGlvbmFsbHkgY2hhbmdlIHRoaXMgdG8gQ2x1c3RlckZpcnN0V2l0aEhvc3ROZXQgaW4gY2FzZSB5b3UgaGF2ZSAnaG9zdE5ldHdvcms6IHRydWUnLgogICMgQnkgZGVmYXVsdCwgd2hpbGUgdXNpbmcgaG9zdCBuZXR3b3JrLCBuYW1lIHJlc29sdXRpb24gdXNlcyB0aGUgaG9zdCdzIEROUy4gSWYgeW91IHdpc2ggbmdpbngtY29udHJvbGxlcgogICMgdG8ga2VlcCByZXNvbHZpbmcgbmFtZXMgaW5zaWRlIHRoZSBrOHMgbmV0d29yaywgdXNlIENsdXN0ZXJGaXJzdFdpdGhIb3N0TmV0LgogIGRuc1BvbGljeTogQ2x1c3RlckZpcnN0CgogICMgQmFyZS1tZXRhbCBjb25zaWRlcmF0aW9ucyB2aWEgdGhlIGhvc3QgbmV0d29yayBodHRwczovL2t1YmVybmV0ZXMuZ2l0aHViLmlvL2luZ3Jlc3MtbmdpbngvZGVwbG95L2JhcmVtZXRhbC8jdmlhLXRoZS1ob3N0LW5ldHdvcmsKICAjIEluZ3Jlc3Mgc3RhdHVzIHdhcyBibGFuayBiZWNhdXNlIHRoZXJlIGlzIG5vIFNlcnZpY2UgZXhwb3NpbmcgdGhlIE5HSU5YIEluZ3Jlc3MgY29udHJvbGxlciBpbiBhIGNvbmZpZ3VyYXRpb24gdXNpbmcgdGhlIGhvc3QgbmV0d29yaywgdGhlIGRlZmF1bHQgLS1wdWJsaXNoLXNlcnZpY2UgZmxhZyB1c2VkIGluIHN0YW5kYXJkIGNsb3VkIHNldHVwcyBkb2VzIG5vdCBhcHBseQogIHJlcG9ydE5vZGVJbnRlcm5hbElwOiBmYWxzZQoKICAjIyBVc2UgaG9zdCBwb3J0cyA4MCBhbmQgNDQzCiAgZGFlbW9uc2V0OgogICAgdXNlSG9zdFBvcnQ6IGZhbHNlCgogICAgaG9zdFBvcnRzOgogICAgICBodHRwOiA4MAogICAgICBodHRwczogNDQzCgogICMjIFJlcXVpcmVkIG9ubHkgaWYgZGVmYXVsdEJhY2tlbmQuZW5hYmxlZCA9IGZhbHNlCiAgIyMgTXVzdCBiZSA8bmFtZXNwYWNlPi88c2VydmljZV9uYW1lPgogICMjCiAgZGVmYXVsdEJhY2tlbmRTZXJ2aWNlOiAiIgoKICAjIyBFbGVjdGlvbiBJRCB0byB1c2UgZm9yIHN0YXR1cyB1cGRhdGUKICAjIwogIGVsZWN0aW9uSUQ6IGluZ3Jlc3MtY29udHJvbGxlci1sZWFkZXIKCiAgIyMgVGhpcyBzZWN0aW9uIHJlZmVycyB0byB0aGUgY3JlYXRpb24gb2YgdGhlIEluZ3Jlc3NDbGFzcyByZXNvdXJjZQogICMjIEluZ3Jlc3NDbGFzcyByZXNvdXJjZXMgYXJlIHN1cHBvcnRlZCBzaW5jZSBrOHMgPj0gMS4xOCBhbmQgcmVxdWlyZWQgc2luY2UgazhzID49IDEuMTkKICBpbmdyZXNzQ2xhc3NSZXNvdXJjZToKICAgICMgLS0gTmFtZSBvZiB0aGUgaW5ncmVzc0NsYXNzCiAgICBuYW1lOiBuZ2lueAogICAgIyAtLSBJcyB0aGlzIGluZ3Jlc3NDbGFzcyBlbmFibGVkIG9yIG5vdAogICAgZW5hYmxlZDogdHJ1ZQogICAgIyAtLSBJcyB0aGlzIHRoZSBkZWZhdWx0IGluZ3Jlc3NDbGFzcyBmb3IgdGhlIGNsdXN0ZXIKICAgIGRlZmF1bHQ6IGZhbHNlCiAgICAjIC0tIENvbnRyb2xsZXItdmFsdWUgb2YgdGhlIGNvbnRyb2xsZXIgdGhhdCBpcyBwcm9jZXNzaW5nIHRoaXMgaW5ncmVzc0NsYXNzCiAgICBjb250cm9sbGVyVmFsdWU6ICJrOHMuaW8vaW5ncmVzcy1uZ2lueCIKCiAgICAjIC0tIFBhcmFtZXRlcnMgaXMgYSBsaW5rIHRvIGEgY3VzdG9tIHJlc291cmNlIGNvbnRhaW5pbmcgYWRkaXRpb25hbAogICAgIyBjb25maWd1cmF0aW9uIGZvciB0aGUgY29udHJvbGxlci4gVGhpcyBpcyBvcHRpb25hbCBpZiB0aGUgY29udHJvbGxlcgogICAgIyBkb2VzIG5vdCByZXF1aXJlIGV4dHJhIHBhcmFtZXRlcnMuCiAgICBwYXJhbWV0ZXJzOiB7fQoKICAjIyBOYW1lIG9mIHRoZSBpbmdyZXNzIGNsYXNzIHRvIHJvdXRlIHRocm91Z2ggdGhpcyBjb250cm9sbGVyCiAgIyMKICBpbmdyZXNzQ2xhc3M6IG5naW54CgogICMgbGFiZWxzIHRvIGFkZCB0byB0aGUgZGVwbG95bWVudCBtZXRhZGF0YQogIGRlcGxveW1lbnRMYWJlbHM6IHt9CgogICMgbGFiZWxzIHRvIGFkZCB0byB0aGUgcG9kIGNvbnRhaW5lciBtZXRhZGF0YQogIHBvZExhYmVsczoge30KICAjICBrZXk6IHZhbHVlCgogICMjIFNlY3VyaXR5IENvbnRleHQgcG9saWNpZXMgZm9yIGNvbnRyb2xsZXIgcG9kcwogICMjIFNlZSBodHRwczovL2t1YmVybmV0ZXMuaW8vZG9jcy90YXNrcy9hZG1pbmlzdGVyLWNsdXN0ZXIvc3lzY3RsLWNsdXN0ZXIvIGZvcgogICMjIG5vdGVzIG9uIGVuYWJsaW5nIGFuZCB1c2luZyBzeXNjdGxzCiAgIyMKICBwb2RTZWN1cml0eUNvbnRleHQ6IHt9CgogICMjIEFsbG93cyBjdXN0b21pemF0aW9uIG9mIHRoZSBleHRlcm5hbCBzZXJ2aWNlCiAgIyMgdGhlIGluZ3Jlc3Mgd2lsbCBiZSBib3VuZCB0byB2aWEgRE5TCiAgcHVibGlzaFNlcnZpY2U6CiAgICBlbmFibGVkOiBmYWxzZQogICAgIyMgQWxsb3dzIG92ZXJyaWRpbmcgb2YgdGhlIHB1Ymxpc2ggc2VydmljZSB0byBiaW5kIHRvCiAgICAjIyBNdXN0IGJlIDxuYW1lc3BhY2U')}>
//         Open Drawer
//       </button>
//       <DrawerEditor
//         visible={drawerVisible}
//         onClose={handleCloseDrawer}
//         base64Content={base64Content}
//       />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import DrawerEditor from './DrawerEditor'; // Assuming this is the path to your DrawerEditor component

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [base64Content, setBase64Content] = useState('');

  // Function to handle uploading YAML file
  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = async () => {
        // Convert YAML content to base64
        const base64Content = btoa(reader.result);
        
        // Open the drawer with the base64 content
        setDrawerVisible(true);
        setBase64Content(base64Content);
      };
      
      reader.readAsText(file);
    } catch (error) {
      console.error('Error uploading and converting YAML file:', error);
    }
  };

  // Function to handle closing the drawer
  const handleCloseDrawer = () => {
    setDrawerVisible(false);
    setBase64Content('');
  };

  return (
    <div>
      <input
        type="file"
        accept=".yaml, .yml"
        onChange={handleFileUpload}
      />
      <DrawerEditor
        visible={drawerVisible}
        onClose={handleCloseDrawer}
        base64Content={base64Content}
      />
    </div>
  );
};

export default App;
