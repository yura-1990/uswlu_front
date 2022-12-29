import React, { useRef } from "react";
import { Editor as EditorReact } from "@tinymce/tinymce-react";

function Editor({ content, setContent, lng }) {
  const editorRef = useRef(null);

  function example_image_upload_handler(blobInfo, success, failure, progress) {
    var xhr, formData;

    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "https://uzswlu-diyorbek.herokuapp.com/api/image/add");

    xhr.upload.onprogress = function (e) {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function () {
      var json;

      if (xhr.status === 403) {
        failure("HTTP Error: " + xhr.status, { remove: true });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        failure("HTTP Error: " + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.path != "string") {
        failure("Invalid JSON: " + xhr.responseText);
        return;
      }
      console.log(json);

      success("https://uzswlu-diyorbek.herokuapp.com/" + json.path);
    };

    xhr.onerror = function () {
      failure(
        "Image upload failed due to a XHR Transport error. Code: " + xhr.status
      );
    };

    formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
  }

  return (
    <>
      <EditorReact
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey="94xd1mwe7htytqd40axx47y6n9a5ip7xwzha0fks3f0j7xum"
        initialValue={content[`description_${lng}`]}
        init={{
          selector: "tiny-react_94934574321647176555107",
          height: 500,
          plugins: `autoresize autosave charmap code print preview searchreplace
             autolink directionality visualblocks visualchars fullscreen hr
              image link media  template codesample table charmap hr pagebreak
               nonbreaking anchor insertdatetime advlist lists
                wordcount emoticons textpattern help`,
          toolbar: `formatselect | bold italic strikethrough underline forecolor backcolor removeformat |
           numlist bullist | outdent indent  |
           alignleft aligncenter alignright alignjustify size | link | image media
            code fullscreen hr emoticons  charmap   
           restoredraft`,
          file_picker_callback: function (callback, value, meta) {
            // Provide file and text for the link dialog
            if (meta.filetype === "file") {
              callback("mypage.html", { text: "My text" });
            }

            // Provide image and alt text for the image dialog
            if (meta.filetype === "image") {
              callback("myimage.jpg", { alt: "My alt text" });
            }

            // Provide alternative source and posted for the media dialog
            if (meta.filetype === "media") {
              callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "image.jpg",
              });
            }
          },
          images_upload_handler: example_image_upload_handler,
          image_uploadtab: true,
          file_picker_types: "file image media",
          image_caption: true,
          a11y_advanced_options: true,
          autoresize_bottom_margin: 10,
          menubar: true,
          default_link_target: "_blank",
          link_default_protocol: "https",
          autosave_ask_before_unload: false,
          autosave_interval: "20s",
          autosave_restore_when_empty: true,
          images_file_types: "jpg,svg,webp",
          charmap_append: [
            [0x2600, "sun"],
            [0x2601, "cloud"],
          ],
          // fullpage_default_doctype: '<!DOCTYPE html>',
          // fullpage_default_encoding: 'UTF-8',
          // fullpage_default_font_size: '14px',
          // fullpage_default_font_family: "'Roboto', Raleway, Serif;",
          // fullpage_default_title: 'UzSWLU',
          // fullpage_default_text_color: 'black',
          // fullpage_default_xml_pi: true,
          // fullpage_hide_in_source_view: true,
        }}
        onBlur={(e, editor) => {
          const data = editor.getContent();
          setContent({ ...content, [`description_${lng}`]: data });
        }}
      />
    </>
  );
}

export default Editor;

// content_style:
// '.left { text-align: left; } ' +
// 'img.left { float: left; } ' +
// 'table.left { float: left; } ' +
// '.right { text-align: right; } ' +
// 'img.right { float: right; } ' +
// 'table.right { float: right; } ' +
// '.center { text-align: center; } ' +
// 'img.center { display: block; margin: 0 auto; } ' +
// 'table.center { display: block; margin: 0 auto; } ' +
// '.full { text-align: justify; } ' +
// 'img.full { display: block; margin: 0 auto; } ' +
// 'table.full { display: block; margin: 0 auto; } ' +
// '.bold { font-weight: bold; } ' +
// '.italic { font-style: italic; } ' +
// '.underline { text-decoration: underline; } ' +
// '.example1 {} ' +
// 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }' +
// '.tablerow1 { background-color: #D3D3D3; }',
// formats: {
// alignleft: {
//   selector:
//     'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video',
//   classes: 'left',
// },
// aligncenter: {
//   selector:
//     'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video',
//   classes: 'center',
// },
// alignright: {
//   selector:
//     'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video',
//   classes: 'right',
// },
// alignfull: {
//   selector:
//     'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video',
//   classes: 'full',
// },
// bold: { inline: 'span', classes: 'bold' },
// italic: { inline: 'span', classes: 'italic' },
// underline: { inline: 'span', classes: 'underline', exact: true },
// strikethrough: { inline: 'del' },
// customformat: {
//   inline: 'span',
//   styles: { color: '#00ff00', fontSize: '20px' },
//   attributes: { title: 'My custom format' },
//   classes: 'example1',
// },
// },
// style_formats: [
// { title: 'Custom format', format: 'customformat' },
// { title: 'Align left', format: 'alignleft' },
// { title: 'Align center', format: 'aligncenter' },
// { title: 'Align right', format: 'alignright' },
// { title: 'Align full', format: 'alignfull' },
// { title: 'Bold text', inline: 'strong' },
// { title: 'Red text', inline: 'span', styles: { color: '#ff0000' } },
// { title: 'Red header', block: 'h1', styles: { color: '#ff0000' } },
// {
//   title: 'Badge',
//   inline: 'span',
//   styles: {
//     display: 'inline-block',
//     border: '1px solid #2276d2',
//     'border-radius': '5px',
//     padding: '2px 5px',
//     margin: '0 2px',
//     color: '#2276d2',
//   },
// },
// { title: 'Table row 1', selector: 'tr', classes: 'tablerow1' },
// { title: 'Image formats' },
// {
//   title: 'Image Left',
//   selector: 'img',
//   styles: { float: 'left', margin: '0 10px 0 10px' },
// },
// {
//   title: 'Image Right',
//   selector: 'img',
//   styles: { float: 'right', margin: '0 0 10px 10px' },
// },
// ],

// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// import React from 'react'

// const Editor = ({ content, setContent, lng }) => {
//   return (
//     <div>
//       <CKEditor
//         editor={ClassicEditor}
//         data={content[`description_${lng}`]}
//         onBlur={(e, editor) => {
//           const data = editor.getData()
//           setContent({ ...content, [`description_${lng}`]: data })
//         }}
//       />
//     </div>
//   )
// }

// export default Editor
