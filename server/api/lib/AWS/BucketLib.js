const AWS = require("aws-sdk");
const fs = require("fs");
const https = require("https");

const envConfigs = require("../../../config/index");

const env = process.env.NODE_ENV;
const config = envConfigs[env];

class BucketLib {
    constructor() {
        this.myConfig = AWS.config.update({
            accessKeyId: config.wsAccess,
            secretAccessKey: config.wsSecret,
            region: config.wsRegion,
        });

        if (!this.s3) {
            this.s3 = new AWS.S3({ apiVersion: "2006-03-01" });
            this.bucketName = config.wsNameBucket;
            // console.log(this.bucketName);
        }
    }

    async listObjects() {
        var params = {
            Bucket: this.bucketName,
            Delimiter: "/",
            Prefix: "demo/",
        };
        this.s3.listObjects(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            }
            if (data) {
                console.log("data", data);
            }
        });
    }

    async getObjects(key) {
        var params = {
            Bucket: this.bucketName,
            Key: key,
        };

        let file = await this.s3.getObject(params).createReadStream();
        return file;
    }

    deleteObject(key) {
        var params = {
            Bucket: this.bucketName,
            Key: key,
        };

        console.log("params", params);

        this.s3.deleteObject(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            }
            if (data) {
                console.log("data", data);
            }
        });
    }

    getSignedUrl(key) {
        var params = {
            Bucket: this.bucketName,
            Key: key,
            Expires: 60 * 1,
        };

        console.log("params", params);

        const preSignUrl = this.s3.getSignedUrl("getObject", params);

        console.log(preSignUrl);

        return preSignUrl;
    }

    async getSignedUrlStream(key, res) {
        var params = {
            Bucket: this.bucketName,
            Key: key,
        };

        console.log("params", params);
        // Create new read steam from s3 getObject
        const s3FileReadStream = await this.s3.getSignedUrlPromise("getObject", params);
        console.log("s3FileReadStream", s3FileReadStream);

        https.get(s3FileReadStream, (stream) => {
            stream.pipe(res);
        });
    }

    uploadFile(file, key, name = "archivo") {
        let ContentType = getMimeType(file.filename);

        const uploadParams = {
            Bucket: this.bucketName,
            Key: key,
            Body: file.content,
            ACL: "public-read",
            Tagging: `name=${name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/ /g, "_")}`,
            ContentType,
        };

        console.log("S3 uploadParams", uploadParams);

        this.s3.upload(uploadParams, function (err, data) {
            if (err) {
                console.log("Error", err);
            }
            if (data) {
                console.log("Upload Success", data);
                console.log("Upload Success", data.Location);
                return data.Location;
            }
        });
    }

    async uploadFileBase64(base64, key) {
        // Ensure that you POST a base64 data to your server.
        // Let's assume the variable "base64" is one.
        const base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""), "base64");

        // Getting the file type, ie: jpeg, png or gif
        const type = base64.split(";")[0].split("/")[1];

        // Generally we'd have an userId associated with the image
        // For this example, we'll simulate one
        const userId = 1;

        // With this setup, each time your user uploads an image, will be overwritten.
        // To prevent this, use a different Key each time.
        // This won't be needed if they're uploading their avatar, hence the filename, userAvatar.js.

        var params = {
            Bucket: config.wsNameBucket,
            Key: key,
            Body: base64Data,
            ACL: "public-read",
            ContentEncoding: "base64", // required
            ContentType: `image/${type}`, // required. Notice the back ticks
        };

        // The upload() is used instead of putObject() as we'd need the location url and assign that to our user profile/database
        // see: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
        let location = "";
        try {
            const { Location, Key } = await s3.upload(params).promise();
            location = Location;
            key = Key;
        } catch (error) {
            // console.log(error)
        }

        // Save the Location (url) to your database and Key if needs be.
        // As good developers, we should return the url and let other function do the saving to database etc
        console.log(location, key);

        return location;

        // To delete, see: https://gist.github.com/SylarRuby/b3b1430ca633bc5ffec29bbcdac2bd52
    }

    async getMimeType(file) {
        // MIME types array
        let mimeTypes = {
            323: "text/h323",
            acx: "application/internet-property-stream",
            ai: "application/postscript",
            aif: "audio/x-aiff",
            aifc: "audio/x-aiff",
            aiff: "audio/x-aiff",
            asf: "video/x-ms-asf",
            asr: "video/x-ms-asf",
            asx: "video/x-ms-asf",
            au: "audio/basic",
            avi: "video/x-msvideo",
            axs: "application/olescript",
            bas: "text/plain",
            bcpio: "application/x-bcpio",
            bin: "application/octet-stream",
            bmp: "image/bmp",
            c: "text/plain",
            cat: "application/vnd.ms-pkiseccat",
            cdf: "application/x-cdf",
            cer: "application/x-x509-ca-cert",
            class: "application/octet-stream",
            clp: "application/x-msclip",
            cmx: "image/x-cmx",
            cod: "image/cis-cod",
            cpio: "application/x-cpio",
            crd: "application/x-mscardfile",
            crl: "application/pkix-crl",
            crt: "application/x-x509-ca-cert",
            csh: "application/x-csh",
            css: "text/css",
            dcr: "application/x-director",
            der: "application/x-x509-ca-cert",
            dir: "application/x-director",
            dll: "application/x-msdownload",
            dms: "application/octet-stream",
            doc: "application/msword",
            dot: "application/msword",
            dvi: "application/x-dvi",
            dxr: "application/x-director",
            eps: "application/postscript",
            etx: "text/x-setext",
            evy: "application/envoy",
            exe: "application/octet-stream",
            fif: "application/fractals",
            flr: "x-world/x-vrml",
            gif: "image/gif",
            gtar: "application/x-gtar",
            gz: "application/x-gzip",
            h: "text/plain",
            hdf: "application/x-hdf",
            hlp: "application/winhlp",
            hqx: "application/mac-binhex40",
            hta: "application/hta",
            htc: "text/x-component",
            htm: "text/html",
            html: "text/html",
            htt: "text/webviewhtml",
            ico: "image/x-icon",
            ief: "image/ief",
            iii: "application/x-iphone",
            ins: "application/x-internet-signup",
            isp: "application/x-internet-signup",
            jfif: "image/pipeg",
            jpe: "image/jpeg",
            jpeg: "image/jpeg",
            jpg: "image/jpeg",
            js: "application/x-javascript",
            latex: "application/x-latex",
            lha: "application/octet-stream",
            lsf: "video/x-la-asf",
            lsx: "video/x-la-asf",
            lzh: "application/octet-stream",
            m13: "application/x-msmediaview",
            m14: "application/x-msmediaview",
            m3u: "audio/x-mpegurl",
            man: "application/x-troff-man",
            mdb: "application/x-msaccess",
            me: "application/x-troff-me",
            mht: "message/rfc822",
            mhtml: "message/rfc822",
            mid: "audio/mid",
            mny: "application/x-msmoney",
            mov: "video/quicktime",
            movie: "video/x-sgi-movie",
            mp2: "video/mpeg",
            mp3: "audio/mpeg",
            mpa: "video/mpeg",
            mpe: "video/mpeg",
            mpeg: "video/mpeg",
            mpg: "video/mpeg",
            mpp: "application/vnd.ms-project",
            mpv2: "video/mpeg",
            ms: "application/x-troff-ms",
            mvb: "application/x-msmediaview",
            nws: "message/rfc822",
            oda: "application/oda",
            p10: "application/pkcs10",
            p12: "application/x-pkcs12",
            p7b: "application/x-pkcs7-certificates",
            p7c: "application/x-pkcs7-mime",
            p7m: "application/x-pkcs7-mime",
            p7r: "application/x-pkcs7-certreqresp",
            p7s: "application/x-pkcs7-signature",
            pbm: "image/x-portable-bitmap",
            pdf: "application/pdf",
            pfx: "application/x-pkcs12",
            pgm: "image/x-portable-graymap",
            pko: "application/ynd.ms-pkipko",
            pma: "application/x-perfmon",
            pmc: "application/x-perfmon",
            pml: "application/x-perfmon",
            pmr: "application/x-perfmon",
            pmw: "application/x-perfmon",
            pnm: "image/x-portable-anymap",
            pot: "application/vnd.ms-powerpoint",
            ppm: "image/x-portable-pixmap",
            pps: "application/vnd.ms-powerpoint",
            ppt: "application/vnd.ms-powerpoint",
            prf: "application/pics-rules",
            ps: "application/postscript",
            pub: "application/x-mspublisher",
            qt: "video/quicktime",
            ra: "audio/x-pn-realaudio",
            ram: "audio/x-pn-realaudio",
            ras: "image/x-cmu-raster",
            rgb: "image/x-rgb",
            rmi: "audio/mid",
            roff: "application/x-troff",
            rtf: "application/rtf",
            rtx: "text/richtext",
            scd: "application/x-msschedule",
            sct: "text/scriptlet",
            setpay: "application/set-payment-initiation",
            setreg: "application/set-registration-initiation",
            sh: "application/x-sh",
            shar: "application/x-shar",
            sit: "application/x-stuffit",
            snd: "audio/basic",
            spc: "application/x-pkcs7-certificates",
            spl: "application/futuresplash",
            src: "application/x-wais-source",
            sst: "application/vnd.ms-pkicertstore",
            stl: "application/vnd.ms-pkistl",
            stm: "text/html",
            svg: "image/svg+xml",
            sv4cpio: "application/x-sv4cpio",
            sv4crc: "application/x-sv4crc",
            t: "application/x-troff",
            tar: "application/x-tar",
            tcl: "application/x-tcl",
            tex: "application/x-tex",
            texi: "application/x-texinfo",
            texinfo: "application/x-texinfo",
            tgz: "application/x-compressed",
            tif: "image/tiff",
            tiff: "image/tiff",
            tr: "application/x-troff",
            trm: "application/x-msterminal",
            tsv: "text/tab-separated-values",
            txt: "text/plain",
            uls: "text/iuls",
            ustar: "application/x-ustar",
            vcf: "text/x-vcard",
            vrml: "x-world/x-vrml",
            wav: "audio/x-wav",
            wcm: "application/vnd.ms-works",
            wdb: "application/vnd.ms-works",
            wks: "application/vnd.ms-works",
            wmf: "application/x-msmetafile",
            wps: "application/vnd.ms-works",
            wri: "application/x-mswrite",
            wrl: "x-world/x-vrml",
            wrz: "x-world/x-vrml",
            xaf: "x-world/x-vrml",
            xbm: "image/x-xbitmap",
            xla: "application/vnd.ms-excel",
            xlc: "application/vnd.ms-excel",
            xlm: "application/vnd.ms-excel",
            xls: "application/vnd.ms-excel",
            xlsx: "vnd.ms-excel",
            xlt: "application/vnd.ms-excel",
            xlw: "application/vnd.ms-excel",
            xof: "x-world/x-vrml",
            xpm: "image/x-xpixmap",
            xwd: "image/x-xwindowdump",
            z: "application/x-compress",
            zip: "application/zip",
        };
        let extension = file.split(".").pop();
        return mimeTypes[extension];
    }
}

module.exports = BucketLib;
